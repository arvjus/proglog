<?php
/*
 * See dolog.php for record definition.
 *
 * version, date, duration, environment, model, weather, speed, exercise, options, rating, crashes, comments
 */

// convert duration to hours, minutes
function human_readable_duration($min) {
    return sprintf('%dh %dm', floor($min / 60), $min % 60);
}

// group data, based on record position
function collect_duration_count($name, $pos, $len) {
    global $records, $stats;
    $counts = array();
    $durations = array();
    foreach ($records as $record) {
        if ($len > 0) {
            $key = substr($record[$pos], 0, $len);
        } else {
            $key = $record[$pos];
        }
        $duration = $record[2];
        if (in_array($key, array_keys($counts))) {
            $counts[$key] ++;
            $durations[$key] += $duration;
        } else {
            $counts[$key] = 1;
            $durations[$key] = $duration;
        }
    }
    foreach (array_keys($counts) as $key) {
        $stats["$name '$key'"] =  "total duration: " . human_readable_duration($durations[$key]) . ", count: " . $counts[$key];
    }
}

$stats = array();

// read all log records
$records = array();
$fh = fopen("../data/log.txt", "r") or die("can't open log file");
while(!feof($fh)) {
    $record = explode("|", chop(fgets($fh)));
    if (count($record) > 5) {
        $records[] = $record;
    }
}
fclose($fh);


collect_duration_count("Year", 1, 4);
collect_duration_count("Environment", 3, 0);
collect_duration_count("Model", 4, 0);
collect_duration_count("Exercise", 7, 0);


// return json
echo json_encode($stats);
