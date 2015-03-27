<?php
$header = array("date", "duration", "environment", "model", "weather", "speed", "exercise", "rating", "options", "crashes", "comments");


$records = array();
$fh = fopen("../data/log.txt", "r") or die("can't open file");
while(!feof($fh)) {
    $record = explode("|", chop(fgets($fh)));
    if (count($record) > 5) {
        $records[] = $record;
    }
}
fclose($fh);

echo json_encode(array("header" => $header, "records" => $records));
