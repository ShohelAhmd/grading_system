var marks=prompt("Enter your marks : ");

if (marks>100||marks<0)
    document.write("Invalide");

else if(marks>=80 && marks<=100)
    document.write("A+");
else if(marks>=70 && marks<=79)
    document.write("A");
else if(marks>=60 && marks<=69)
    document.write("A-");
else if(marks>=50 && marks<=59)
    document.write("B+");
else if(marks>=40 && marks<=49)
    document.write("C");
else 
    document.write("Fail");