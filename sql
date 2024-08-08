create table product(
	id serial primary key, 
	name char(20),
	brand char(20),
	rating int,
	color char(10)
)

insert into product(name,brand,rating,color)
values('Shirt','Allen Solley',4.5,'Pink'),
('sneaker','nike blazer',4.5,'white'),
('shoes','adidas',5,'Pink'),
('T-Shirt','H&M',4.6,'green'),
('Crop Top','H&M',4.6,'blue')

select * from product

// to update table
	
update product set brand='Roadstar' where id=2

create table productbackup(
	id int primary key, 
	name char(20),
	brand char(20),
	rating int,
	color char(10),
	deletedat timestamp default current_timestamp
)

select * from productbackup

// insert deleted values into productbackup table
	
create or replace function backupOnDelete()
returns trigger 
as $$
begin
	insert into productbackup(id,name,brand,rating,color,deletedat)
	values(OLD.id,OLD.name,OLD.brand,OLD.rating,OLD.color,current_timestamp);
	return OLD;
end;
$$
language plpgsql;


// it will trigger on delete and call backupOnDelete function 
	
create trigger afterdelete
after delete on product
for each row
execute function backupOnDelete();


//to delete something from table 
	
delete from product where id='2'