-- 리뷰
insert into review(mno,msno,fsco,ssco,csco) values(1,5,8,9,10);

-- 코멘트
insert into rv_cmt(rvno,mno,msno,grup,level,seq,cont,rc_rdt) values(1,1,5,1,1,1,'자주가는데 갈때마다 너무 좋아요~!',now());
insert into rv_cmt(rvno,mno,msno,grup,level,seq,cont,rc_rdt) values(2,5,5,1,2,2,'이용해 주셔서 감사합니다.',now());
insert into rv_cmt(rvno,mno,msno,grup,level,seq,cont,rc_rdt) values(3,1,5,2,1,1,'자주가는데 갈때마다 너무 좋아요~!\n자주가는데 갈때마다 너무 좋아요~!\n자주가는데 갈때마다 너무 좋아요~!',now());
insert into rv_cmt(rvno,mno,msno,grup,level,seq,cont,rc_rdt) values(4,1,5,2,2,2,'이용해 주셔서 감사합니다.',now());
