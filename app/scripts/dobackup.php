<html>
<body>

<?php
$source = "../data";
$dest= "../backup/" . $_POST['target'];

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
?>

<p>A backup has been create successfully!</p>
<a href="/#admin"><input type="button" value="Back"></a>

</body>
</html>

