-- 스탬프
insert into stmp(mno, msno, cnt) values(1,5,10);
insert into stmp_log(mno, msno, chng, pm, chdt) values(1,5,1,-9,now());
insert into stmp(mno, msno, cnt) values(2,6,4);
insert into stmp_log(mno, msno, chng, pm, chdt) values(2,6,3,-1,now());
insert into stmp(mno, msno, cnt) values(3,7,3);
insert into stmp_log(mno, msno, chng, pm, chdt) values(3,7,10,+7,now());
insert into stmp(mno, msno, cnt) values(4,7,5);
insert into stmp_log(mno, msno, chng, pm, chdt) values(4,7,4,-1,now());
insert into stmp_log(mno, msno, chng, pm, chdt) values(4,7,10,+6,now());
insert into stmp(mno, msno, cnt) values(1,6,6);
insert into stmp_log(mno, msno, chng, pm, chdt) values(1,6,4,-2,now());
insert into stmp_log(mno, msno, chng, pm, chdt) values(1,6,10,+6,now());
insert into stmp(mno, msno, cnt) values(2,7,7);
insert into stmp_log(mno, msno, chng, pm, chdt) values(2,7,10,+3,now());

-- 업체스탬프
insert into stmp_bnf(sbno, msno, sb_cnt, sb_cont) values(1 ,5, 15,'마사지');
insert into stmp_bnf(sbno, msno, sb_cnt, sb_cont) values(2 ,5, 10,'네일아트');
insert into stmp_bnf(sbno, msno, sb_cnt, sb_cont) values(3 ,6, 15,'피부관리');
insert into stmp_bnf(sbno, msno, sb_cnt, sb_cont) values(4 ,6, 15,'전신마사지');
insert into stmp_bnf(sbno, msno, sb_cnt, sb_cont) values(5 ,7, 5,'네일아트');
insert into stmp_bnf(sbno, msno, sb_cnt, sb_cont) values(6 ,7, 10,'마사지');


