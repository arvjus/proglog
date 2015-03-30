<html>
<body>

<?php
/*
 * Record fields are separated by '|' (pipe) character.
 *
 * Record definition v1
 * version - v1
 * date - date in yyyy-mm-dd format
 * duration - numeric, in minutes
 * environment - sim/irl
 * model - alphanumeric, model name
 * weather - multiple values, separated by space character
 * speed - simulator speed in %
 * exercise - the name of exercise
 * options - exercise-specific options, multiple values, separated by space character
 * rating - numeric, 1-5. 0 means not set
 * crashes - numeric, number of craches per flight session
 * comments - alphanumeric
 */
$fields = array("date", "duration", "environment", "model", "weather", "speed", "exercise", "rating", "crashes", "comments");
$weather = "";
$options = "";
if (isset($_POST['weather'])) {
    foreach ($_POST['weather'] as $weather_) {
        $weather .= "$weather_ ";
    }
}
foreach ($_POST as $param_name => $param_val) {
    if (!in_array($param_name, $fields)) {
        if (is_array($param_val)) {
            $options .= "$param_name";
            foreach ($param_val as $val) {
                $options .= ":$val";
            }
            $options .= " ";
        } else {
            $options .= "$param_name:$param_val ";
        }
    }
}

$fh = fopen("../data/log.txt", "a") or die("can't open log file");
fwrite($fh,
    "v1|" .
    $_POST["date"] . "|" .
    $_POST["duration"] . "|" .
    $_POST["environment"] . "|" .
    $_POST["model"] . "|" .
    rtrim($weather) . "|" .
    $_POST["speed"] . "|" .
    $_POST["exercise"] . "|" .
    rtrim($options) . "|" .
    $_POST["rating"] . "|" .
    $_POST["crashes"] . "|" .
    $_POST["comments"] . "\n");
fclose($fh);
?>

<p>A new log record has been added successfully!</p>
<a href="/#log"><input type="button" value="Back"></a>

</body>
</html>

