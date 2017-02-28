-- 회원 데이터

insert into memb(mno, name, email, tel, chck, mgr) values(1,'사용자1','user01@test.com','1111-1111','1','0');
insert into memb(mno, name, email, tel, chck, mgr) values(2,'사용자2','user02@test.com','1111-1112','0','0');
insert into memb(mno, name, email, tel, chck, mgr) values(3,'사용자3','user03@test.com','1111-1113','1','0');
insert into memb(mno, name, email, tel, chck, mgr) values(4,'사용자4','user04@test.com','1111-1114','0',null);

insert into memb(mno, name, email, tel, chck, mgr) values(5,'업체1','user05@test.com','1111-1115','1','0');
insert into memb(mno, name, email, tel, chck, mgr) values(6,'업체2','user06@test.com','1111-1116','1','0');
insert into memb(mno, name, email, tel, chck, mgr) values(7,'업체3','user07@test.com','1111-1117','1','0');
insert into memb(mno, name, email, tel, chck, mgr) values(8,'업체4','user08@test.com','1111-1118','1','0');
insert into memb(mno, name, email, tel, chck, mgr) values(9,'업체5','user09@test.com','1111-1119','1','0');

insert into memb(mno, name, email, tel, chck, mgr) values(10,'운영자1','user10@test.com','1111-1120','1','1');
insert into memb(mno, name, email, tel, chck, mgr) values(11,'운영자2','user11@test.com','1111-1121','1','1');


-- 업체 데이터 기본(낫널만)

insert into memb_store(MSNO,CRNO,CACHK,CNAME,CTYPE) values(5,'123-45-01234','1','업체명1','마사지');
insert into memb_store(MSNO,CRNO,CACHK,CNAME,CTYPE) values(6,'123-45-01235','1','업체명2','에스테틱');
insert into memb_store(MSNO,CRNO,CACHK,CNAME,CTYPE) values(7,'123-45-01236','1','업체명3','네일아트');
insert into memb_store(MSNO,CRNO,CACHK,CNAME,CTYPE) values(8,'123-45-01237','1','업체명4','왁싱');
insert into memb_store(MSNO,CRNO,CACHK,CNAME,CTYPE) values(9,'123-45-01238','1','업체명5','마사지');


-- 업체 사진

insert into ms_phot(mpno,MSNO,path) values(1,5,'img01.jpg');
insert into ms_phot(mpno,MSNO,path) values(2,5,'img02.jpg');
insert into ms_phot(mpno,MSNO,path) values(3,5,'img03.jpg');

insert into ms_phot(mpno,MSNO,path) values(4,6,'img02.jpg');
insert into ms_phot(mpno,MSNO,path) values(5,6,'img03.jpg');
insert into ms_phot(mpno,MSNO,path) values(6,6,'img01.jpg');

insert into ms_phot(mpno,MSNO,path) values(7,7,'img03.jpg');
insert into ms_phot(mpno,MSNO,path) values(8,7,'img01.jpg');
insert into ms_phot(mpno,MSNO,path) values(9,7,'img02.jpg');

insert into ms_phot(mpno,MSNO,path) values(10,8,'img03.jpg');
insert into ms_phot(mpno,MSNO,path) values(11,8,'img02.jpg');
insert into ms_phot(mpno,MSNO,path) values(12,8,'img01.jpg');



-- 업체 전화번호

insert into ms_tel(mtno,MSNO,mstel) values(1,5,'1111-1111');
insert into ms_tel(mtno,MSNO,mstel) values(2,5,'1111-1112');
insert into ms_tel(mtno,MSNO,mstel) values(3,5,'1111-1113');
insert into ms_tel(mtno,MSNO,mstel) values(4,6,'2222-1111');
insert into ms_tel(mtno,MSNO,mstel) values(5,7,'3333-4444');
