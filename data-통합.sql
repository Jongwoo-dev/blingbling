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
insert into memb(mno, name, email, tel, chck, mgr) values(12,'업체12','user14@test.com','1111-1121','1','1');
insert into memb(mno, name, email, tel, chck, mgr) values(13,'업체13','user12@test.com','1111-1122','1','1');
insert into memb(mno, name, email, tel, chck, mgr) values(14,'업체14','user13@test.com','1111-1123','1','1');



-- 업체 데이터 기본(낫널만)

insert into memb_store(msno,crno,cachk,cname,ctype,bas_adr) values(5,'123-45-01234','1','업체명1','마사지', '서울특별시 서초구');
insert into memb_store(msno,crno,cachk,cname,ctype,bas_adr) values(6,'123-45-01235','1','업체명2','에스테틱','경기도 안산시');
insert into memb_store(msno,crno,cachk,cname,ctype,bas_adr) values(7,'123-45-01236','1','업체명3','네일아트','경기도 수원시');
insert into memb_store(msno,crno,cachk,cname,ctype,bas_adr) values(8,'123-45-01237','1','업체명4','왁싱','경기도 고양시');
insert into memb_store(msno,crno,cachk,cname,ctype,bas_adr) values(9,'123-45-01249','1','업체명5','마사지','서울특별시 강남구');
insert into memb_store(msno,crno,cachk,cname,ctype,bas_adr) values(12,'123-45-01241','1','업체명10','마사지','서울특별시 강남구');
insert into memb_store(msno,crno,cachk,cname,ctype,bas_adr) values(13,'123-45-01242','1','업체명11','마사지','서울특별시 동작구');
insert into memb_store(msno,crno,cachk,cname,ctype,bas_adr) values(14,'123-45-01239','1','업체명12','마사지','서울특별시 강북구');



-- 업체 사진

insert into ms_phot(mpno,msno,path) values(1,5,'img01.jpg');
insert into ms_phot(mpno,msno,path) values(2,5,'img02.jpg');
insert into ms_phot(mpno,msno,path) values(3,5,'img03.jpg');

insert into ms_phot(mpno,msno,path) values(4,6,'img02.jpg');
insert into ms_phot(mpno,msno,path) values(5,6,'img03.jpg');
insert into ms_phot(mpno,msno,path) values(6,6,'img01.jpg');

insert into ms_phot(mpno,msno,path) values(7,7,'img03.jpg');
insert into ms_phot(mpno,msno,path) values(8,7,'img01.jpg');
insert into ms_phot(mpno,msno,path) values(9,7,'img02.jpg');

insert into ms_phot(mpno,msno,path) values(10,8,'img03.jpg');
insert into ms_phot(mpno,msno,path) values(11,8,'img02.jpg');
insert into ms_phot(mpno,msno,path) values(12,8,'img01.jpg');

insert into ms_phot(mpno,msno,path) values(13,12,'img03.jpg');
insert into ms_phot(mpno,msno,path) values(14,12,'img01.jpg');
insert into ms_phot(mpno,msno,path) values(15,12,'img02.jpg');

insert into ms_phot(mpno,msno,path) values(16,13,'img03.jpg');
insert into ms_phot(mpno,msno,path) values(17,13,'img02.jpg');
insert into ms_phot(mpno,msno,path) values(18,13,'img01.jpg');

insert into ms_phot(mpno,msno,path) values(19,14,'img03.jpg');
insert into ms_phot(mpno,msno,path) values(20,14,'img02.jpg');
insert into ms_phot(mpno,msno,path) values(21,14,'img01.jpg');




-- 업체 전화번호

insert into ms_tel(mtno,msno,mstel) values(1,5,'1111-1111');
insert into ms_tel(mtno,msno,mstel) values(2,5,'1111-1112');
insert into ms_tel(mtno,msno,mstel) values(3,5,'1111-1113');
insert into ms_tel(mtno,msno,mstel) values(4,6,'2222-1111');
insert into ms_tel(mtno,msno,mstel) values(5,7,'3333-4444');
insert into ms_tel(mtno,msno,mstel) values(7,12,'1121-1112');
insert into ms_tel(mtno,msno,mstel) values(8,13,'1151-1113');
insert into ms_tel(mtno,msno,mstel) values(9,14,'2272-1111');
