create table students(
 id integer,
 name text,
 age integer,
 course text);
  


insert into students(id , name ,age ,course) values  (1,  "Amit Sharma",  20,  "Computer Science") ;
  insert into students(id , name ,age ,course)values( 2, "Priya Singh", 22,  "Information Technology");
insert into students(id , name ,age ,course)values(3,"Ravi Kumar",19, "Electronics");
 insert into students(id , name ,age ,course)values( 4,  "Neha Verma",  21, "Mechanical");
 insert into students(id , name ,age ,course)values( 5, "Sohan Lal", 23, "Civil Engineering");
 insert into students(id , name ,age ,course)values(6, "Anjali Mehta",  20, "Computer Science"); 
 insert into students(id , name ,age ,course)values( 7, "Vikas Gupta",  22,  "Information Technology");
insert into students(id , name ,age ,course)values( 8,  "Pooja Mishra", 19,"Mechanical");
insert into students(id , name ,age ,course)values( 9,  "Rajesh Khanna",  21,  "Electronics");
insert into students(id , name ,age ,course)values( 10,  "Sneha Kapoor", 22, "Civil Engineering");


insert into students values(1,"Amit Sharma",20,"Computer Science");
select * from students;

select * from students where course = 'Information Technology'
update students set course = 'Mechanical' where id = 3;
select * from students;
delete from students where name  = 'Ravi Kumar';

select * from students;
