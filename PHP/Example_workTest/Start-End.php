<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculator Start > End</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <?php
        $start = isset($_POST['start']) ? $_POST['start'] : '';
        $end = isset($_POST['end']) ? $_POST['end'] : '';
        $Sum = '';
        
        function summation($start , $end) {
            $maxValue = -1;
            for ($i = $start; $i <= $end; $i++) if ($i % 12 === 0 && $i > $maxValue) $maxValue = $i;
            return $maxValue;
        }

        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            $Sum = ($start !== '' && $end !== '') ? summation($start, $end) : '';

            if (isset($_POST['reset'])) {
                $start = '';
                $end = '';
                $Sum = '';
            }
        }
    ?>

    <form method="post" action="">
        <table border="2px" align="center" width="500">
            <tr>
                <td colspan="2" align="center" class="title">
                    <big> Start >> End </big>
                </td>
            </tr>
            <tr>
                <td class="text-input">ค่าเริ่มต้น </td>
                <td><input type="text" class="result" name="start" value="<?php echo $start; ?>"></td>
            </tr>
            <tr>
                <td class="text-input">ค่าสิ้นสุด</td>
                <td><input type="text" class="result" name="end" value="<?php echo $end; ?>"></td>
            </tr>
            <tr>
                <td class="text-input">ผลลัพธ์</td>
                <td style="text-align: right;"><?php echo $Sum;?></td>
            </tr>
            <tr>
                <td colspan="2" align="center" class="btn">
                    <div class="button-container">
                        <input type="submit" value="คำนวณ">
                        <input type="submit" name="reset" value="รีเซ็ตค่า">
                    </div>
                </td>
            </tr>

        </table>
    </form>
</body>

</html>