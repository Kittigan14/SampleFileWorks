<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="Ex.css">
    <title>Document</title>
</head>

<style>
    p {
        font-size: 30px;
        font-weight: 600;
    }
</style>

<body>


    <?php

        function sayHello($name) {
            echo "Hello PHP $name <br> _________________________________";
        }

        function add($num1, $num2) {
            $result = $num1 + $num2;
            echo "<br><br> Result Add = $result";
        }

        function subtract($a, $b) {
            $result = $a - $a;
            echo "<br> Result Subtract = $result";
        }

        function multiply($a, $b) {
            $result = $a * $a;
            echo "<br> Result Multiply = $result";
        }

        function returnValues($mul1, $mul2) {
            $result = $mul1 * $mul2;
            return $result;
        }

        function divide($div1, $div2, &$result) {
            $result = $div1 / $div2;
        }
    ?>

    <div class="container">
        <h1> <?php sayHello("Kittikarn iwai") ?> </h1>
        <p> <?php add(5, 5) ?> </p>
        <p> <?php subtract(5, 5) ?> </p>
        <p> <?php multiply(5, 5) ?> </p>
        <?php
            $mul1 = 10;
            $mul2 = 100;
            $resultMultiply = returnValues($mul1, $mul2);
            echo "<p>Result Multiply = $resultMultiply </p>"; 

            $div1 = 10;
            $div2 = 20;
            $resultDivide = 0;
            divide($div1, $div2, $resultDivide);
            echo "<p>Result divide = $resultDivide</p>";
        ?>
    </div>

</body>

</html>