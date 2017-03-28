-- 스탬프
insert into stmp(mno, msno, cnt) values(51,3,7);
insert into stmp(mno, msno, cnt) values(51,4,4);
insert into stmp(mno, msno, cnt) values(51,6,3);
insert into stmp(mno, msno, cnt) values(51,7,5);
insert into stmp(mno, msno, cnt) values(51,8,6);
insert into stmp(mno, msno, cnt) values(51,9,7);


-- 스탬프 로그
insert into stmp_log(slno, mno, msno, chng, pm, chdt) values(1, 1,5,1,-9,now());
insert into stmp_log(slno, mno, msno, chng, pm, chdt) values(2, 2,6,3,-1,now());
insert into stmp_log(slno, mno, msno, chng, pm, chdt) values(3, 3,7,10,+7,now());
insert into stmp_log(slno, mno, msno, chng, pm, chdt) values(4, 4,7,4,-1,now());
insert into stmp_log(slno, mno, msno, chng, pm, chdt) values(5, 4,7,10,+6,now());
insert into stmp_log(slno, mno, msno, chng, pm, chdt) values(6, 1,6,4,-2,now());
insert into stmp_log(slno, mno, msno, chng, pm, chdt) values(7, 1,6,10,+6,now());
insert into stmp_log(slno, mno, msno, chng, pm, chdt) values(8, 2,7,10,+3,now());


-- 업체스탬프
insert into stmp_bnf(sbno, msno, sb_cnt, sb_cont) values(1 ,3, 15,'gw풀케어');
insert into stmp_bnf(sbno, msno, sb_cnt, sb_cont) values(2 ,4, 10,'크리스탈');
insert into stmp_bnf(sbno, msno, sb_cnt, sb_cont) values(3 ,6, 15,'화이트닝');
insert into stmp_bnf(sbno, msno, sb_cnt, sb_cont) values(4 ,7, 15,'젤클리터');
insert into stmp_bnf(sbno, msno, sb_cnt, sb_cont) values(5 ,8, 5,'물광아쿠아');
insert into stmp_bnf(sbno, msno, sb_cnt, sb_cont) values(6 ,9, 10,'젤네일');


