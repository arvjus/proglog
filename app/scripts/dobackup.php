<?php
$source = "../data";
$dest = "../backup/" . $_GET['target'];

if (!file_exists($dest)) {
    mkdir($dest, 0755, true);
}
foreach (
    $iterator = new RecursiveIteratorIterator(
        new RecursiveDirectoryIterator($source, RecursiveDirectoryIterator::SKIP_DOTS),
        RecursiveIteratorIterator::SELF_FIRST) as $item) {
    if ($item->isDir()) {
        mkdir($dest . DIRECTORY_SEPARATOR . $iterator->getSubPathName());
    } else {
        copy($item, $dest . DIRECTORY_SEPARATOR . $iterator->getSubPathName());
    }
}

$json = json_encode(array("msg" => "A backup to $dest has been create successfully!", "err" => ""));
print_r($json);
?>
