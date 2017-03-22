-- 스탬프
insert into STMP(mno, msno, cnt) values(1,5,10);
insert into STMP(mno, msno, cnt) values(2,6,4);
insert into STMP(mno, msno, cnt) values(3,7,3);
insert into STMP(mno, msno, cnt) values(4,7,5);
insert into STMP(mno, msno, cnt) values(1,6,6);
insert into STMP(mno, msno, cnt) values(2,7,7);


-- 스탬프 로그
insert into STMP_LOG(slno, mno, msno, chng, pm, chdt) values(1, 1,5,1,-9,now());
insert into STMP_LOG(slno, mno, msno, chng, pm, chdt) values(2, 2,6,3,-1,now());
insert into STMP_LOG(slno, mno, msno, chng, pm, chdt) values(3, 3,7,10,+7,now());
insert into STMP_LOG(slno, mno, msno, chng, pm, chdt) values(4, 4,7,4,-1,now());
insert into STMP_LOG(slno, mno, msno, chng, pm, chdt) values(5, 4,7,10,+6,now());
insert into STMP_LOG(slno, mno, msno, chng, pm, chdt) values(6, 1,6,4,-2,now());
insert into STMP_LOG(slno, mno, msno, chng, pm, chdt) values(7, 1,6,10,+6,now());
insert into STMP_LOG(slno, mno, msno, chng, pm, chdt) values(8, 2,7,10,+3,now());


-- 업체스탬프
insert into STMP_BNF(sbno, msno, sb_cnt, sb_cont) values(1 ,5, 15,'마사지');
insert into STMP_BNF(sbno, msno, sb_cnt, sb_cont) values(2 ,5, 10,'네일아트');
insert into STMP_BNF(sbno, msno, sb_cnt, sb_cont) values(3 ,6, 15,'피부관리');
insert into STMP_BNF(sbno, msno, sb_cnt, sb_cont) values(4 ,6, 15,'전신마사지');
insert into STMP_BNF(sbno, msno, sb_cnt, sb_cont) values(5 ,7, 5,'네일아트');
insert into STMP_BNF(sbno, msno, sb_cnt, sb_cont) values(6 ,7, 10,'마사지');


