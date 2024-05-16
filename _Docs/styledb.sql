create table adminauth(
 adm_id int primary key auto_increment,
 name varchar(80),
 email varchar(80),
 password varchar(100)
)

create table deals ( 
 id bigint primary key auto_increment,
 deal_name varchar(200),
 reference_no int,
 contact varchar(15),
 agreement_amount int,
 work_name varchar(300),
 email varchar(80),
 city varchar(50),
 total_price int
);

create table task (
 task_id int primary key auto_increment,
 task_name varchar(100)
);

create table normal_project_cat (
    npcid int primary key auto_increment,
    ndeal_id bigint,
    category_id int,
    cat_status varchar(50) default "pending",
    project_status varchar(60) default "pending",
    dateofdeadline varchar(80) default 0,
    dateofpostponed varchar(80) default 0,
    dateofcomplete varchar(50) default 0,
    foreign key(category_id) references task(task_id),
    foreign key(ndeal_id) references deals(id)
);

create table subtask (
 sub_task_id int primary key auto_increment,
 sub_task_name varchar(100)
); 

create table normal_project_subtask (
    npstid int primary key auto_increment,
    ndeal_id bigint,
    category_id int,
    stask_id int,
    stask_status varchar(50) default "not started",
    dateofcomplete varchar(50) default 0,
    foreign key(ndeal_id) references deals(id),
    foreign key(category_id) references task(task_id),
    foreign key(stask_id) references subtask(sub_task_id)
);

create table employee(
 em_id int primary key auto_increment,
 name varchar(80),
 email varchar(80),
 designation varchar(30)
);

create table normal_project_employee (
    npeid int primary key auto_increment,
    ndeal_id bigint not null,
    category_id int not null,
    emid int not null,
    dateofassign varchar(50) default 0,
    dateofremove varchar(50) default 0,
    foreign key(ndeal_id) references deals(id),
    foreign key(category_id) references task(task_id),
    foreign key(emid) references employee(em_id)
);

-- finance section-- 

create table normal_projects_finance(
  fid bigint primary key auto_increment,
  ndeal_id bigint not null,
  totalamount int,
  amount_got int default 0,
  dateofpay varchar(50),
  modeofpay varchar(15),
  foreign key(ndeal_id) references deals(id)
)

create table material_names(
  mnid int primary key auto_increment,
  material_name varchar(100)
)

create table material_used(
  muid bigint primary key auto_increment,
  ndeal_id bigint not null,
  material_name varchar(100),
  quantity varchar(100),
  price int,
  foreign key(ndeal_id) references deals(id)
)

create table material_left(
  mlid bigint primary key auto_increment,
  ndeal_id bigint not null,
  material_name varchar(100),
  quantity varchar(100),
  price int,
  foreign key(ndeal_id) references deals(id)
)

-- employee

create table contractual_emp(
  cempid int primary key auto_increment,
  ndeal_id bigint not null,
  category_id int not null,
  emp_name varchar(100),
  designation varchar(400),
  foreign key(ndeal_id) references deals(id),
  foreign key(category_id) references task(task_id)
)

-- extra 

ALTER TABLE `deals` ADD `np_deadline` VARCHAR(50) NULL DEFAULT NULL AFTER `total_price`;
