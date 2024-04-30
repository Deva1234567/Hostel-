<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $number = $_POST['number'];
    $email = $_POST['email'];
    $issue = $_POST['issue'];
    // Write data to Excel file
    $excelFile = 'data.xlsx';
    $data = array(
        array($name, $email)
    );

    // Load Excel writer library
    require_once 'PHPExcel/Classes/PHPExcel.php';

    // Create new PHPExcel object
    $objPHPExcel = new PHPExcel();

    // Set document properties
    $objPHPExcel->getProperties()->setCreator("Your Name")
                                 ->setLastModifiedBy("Your Name")
                                 ->setTitle("Form Data")
                                 ->setSubject("Form Data")
                                 ->setDescription("Form data exported from HTML form")
                                 ->setKeywords("form data")
                                 ->setCategory("Form Data");

    // Add data
    $objPHPExcel->setActiveSheetIndex(0);
    foreach ($data as $row => $rowData) {
        foreach ($rowData as $col => $cellData) {
            $objPHPExcel->getActiveSheet()->setCellValueByColumnAndRow($col, $row + 1, $cellData);
        }
    }

    // Save Excel file
    $objWriter = PHPExcel_IOFactory::createWriter($objPHPExcel, 'Excel2007');
    $objWriter->save($excelFile);

    echo 'Data successfully written to Excel file.';
} else {
    echo 'Invalid request.';
}
?>
