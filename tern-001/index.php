<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="utf-8">
      <title>Title</title>
      
   </head>
   <body>
      <form action="index.php" method="post" name="form">
         <p>И доработайте его так, чтобы переменная restricted принимала не одно из двух, а одно из трёх различных значений: (а) значение yes при значении переменной age меньше 18 (б) значение notsure при значении переменной age равном 18 (в) значение no в противном случае</p>
         <p>Укажи возраст:</p>
         <p>
            <input id="aage" type="number" name="aage" value="<?php echo $_POST['aage']; ?>" step="1">
            <button onclick="myFunction()">Click me</button>
         <div id="phpdiv">
            php говорит:
            <?php require 'tern.php'; ?>
         </div>
         <div id="jsdiv">
            js говорит: 
         </div>
      </form>
   </body>
   <script src="./index.js"></script>
</html>