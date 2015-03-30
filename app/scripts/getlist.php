<?php
/*
 * See dolog.php for record definition.
 *
 * version, date, duration, environment, model, weather, speed, exercise, options, rating, crashes, comments
 */
$header = array("date", "duration", "environment", "model", "weather", "speed", "exercise", "options", "rating", "crashes", "comments");

// read all log records$records = array();
$fh = fopen("../data/log.txt", "r") or die("can't open log file");
while(!feof($fh)) {
    $record = explode("|", chop(fgets($fh)));
    if (count($record) > 5) {
        $records[] = array_slice($record, 1);
    }
}
fclose($fh);

// return json
echo json_encode(array("header" => $header, "records" => array_reverse($records)));
