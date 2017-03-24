-- 회원
drop table if exists memb restrict;

-- 상품
drop table if exists item restrict;

-- 고객센터
drop table if exists sc restrict;

-- 업체리뷰
drop table if exists review restrict;

-- 리뷰댓글
drop table if exists rv_cmt restrict;

-- 예약구매
drop table if exists buy restrict;

-- 업체
drop table if exists memb_store restrict;

-- 찜
drop table if exists favor restrict;

-- 스탬프
drop table if exists stmp restrict;

-- 스탬프혜택
drop table if exists stmp_bnf restrict;

-- 업체전화번호
drop table if exists ms_tel restrict;

-- 업체사진
drop table if exists ms_phot restrict;

-- 스탬프로그
drop table if exists stmp_log restrict;

-- 회원
create table memb (
  mno   integer     not null comment '회원일련번호', -- 회원일련번호
  name  varchar(50) not null comment '이름', -- 이름
  email varchar(40) not null comment '이메일', -- 이메일
  tel   varchar(30) not null comment '휴대폰', -- 휴대폰
  chck  char(1)     not null comment '인증여부', -- 인증여부
  mgr   char(1)     null     comment '운영자여부' -- 운영자여부
)
comment '회원';

-- 회원
alter table memb
  add constraint pk_memb -- 회원 기본키
    primary key (
      mno -- 회원일련번호
    );

-- 회원 유니크 인덱스
create unique index uix_memb
  on memb ( -- 회원
    email asc -- 이메일
  );

alter table memb
  modify column mno integer not null auto_increment comment '회원일련번호';

-- 상품
create table item (
  ino   integer     not null comment '상품일련번호', -- 상품일련번호
  msno  integer     not null comment '업체일련번호', -- 업체일련번호
  name  varchar(50) not null comment '이름', -- 이름
  price integer     not null comment '요금', -- 요금
  utime integer     not null comment '시술시간' -- 시술시간
)
comment '상품';

-- 상품
alter table item
  add constraint pk_item -- 상품 기본키
    primary key (
      ino -- 상품일련번호
    );

alter table item
  modify column ino integer not null auto_increment comment '상품일련번호';

-- 고객센터
create table sc (
  scno   integer      not null comment '고객센터일련번호', -- 고객센터일련번호
  mno    integer      not null comment '작성자회원일련번호', -- 작성자회원일련번호
  crt    varchar(50)  not null comment '카테고리', -- 카테고리
  prfx   varchar(50)  not null comment '말머리', -- 말머리
  titl   varchar(255) not null comment '제목', -- 제목
  cont   text         not null comment '내용', -- 내용
  repl   text         null     comment '답글', -- 답글
  sc_rdt datetime     not null comment '작성날짜' -- 작성날짜
)
comment '고객센터';

-- 고객센터
alter table sc
  add constraint pk_sc -- 고객센터 기본키
    primary key (
      scno -- 고객센터일련번호
    );

alter table sc
  modify column scno integer not null auto_increment comment '고객센터일련번호';

-- 업체리뷰
create table review (
  mno  integer not null comment '회원일련번호', -- 회원일련번호
  msno integer not null comment '업체일련번호', -- 업체일련번호
  fsco integer null     comment '시설점수', -- 시설점수
  ssco integer null     comment '서비스점수', -- 서비스점수
  csco integer null     comment '청결점수' -- 청결점수
)
comment '업체리뷰';

-- 업체리뷰
alter table review
  add constraint pk_review -- 업체리뷰 기본키
    primary key (
      mno,  -- 회원일련번호
      msno  -- 업체일련번호
    );

-- 리뷰댓글
create table rv_cmt (
  rvno   integer  not null comment '리뷰댓글일련번호', -- 리뷰댓글일련번호
  msno   integer  null     comment '업체일련번호', -- 업체일련번호
  mno    integer  null     comment '회원일련번호', -- 회원일련번호
  grup   integer  null     comment '그룹', -- 그룹
  level  integer  null     comment '레벨', -- 레벨
  seq    integer  null     comment '순서', -- 순서
  cont   text     not null comment '내용', -- 내용
  rc_rdt datetime not null comment '날짜', -- 날짜
  del    char(1)  not null default 0 comment '삭제여부' -- 삭제여부
)
comment '리뷰댓글';

-- 리뷰댓글
alter table rv_cmt
  add constraint pk_rv_cmt -- 리뷰댓글 기본키
    primary key (
      rvno -- 리뷰댓글일련번호
    );

alter table rv_cmt
  modify column rvno integer not null auto_increment comment '리뷰댓글일련번호';

-- 예약구매
create table buy (
  bno    integer     not null comment '예약구매일련번호', -- 예약구매일련번호
  mno    integer     not null comment '회원일련번호', -- 회원일련번호
  ino    integer     not null comment '상품일련번호', -- 상품일련번호
  pay_op varchar(50) not null comment '결제수단', -- 결제수단
  pay_st varchar(50) not null comment '결제상태', -- 결제상태
  sctime datetime    not null comment '서비스받는시간', -- 서비스받는시간
  rp     integer     not null comment '인원' -- 인원
)
comment '예약구매';

-- 예약구매
alter table buy
  add constraint pk_buy -- 예약구매 기본키
    primary key (
      bno -- 예약구매일련번호
    );

alter table buy
  modify column bno integer not null auto_increment comment '예약구매일련번호';

-- 업체
create table memb_store (
  msno    integer      not null comment '업체일련번호', -- 업체일련번호
  crno    varchar(100) not null comment '사업자번호', -- 사업자번호
  cachk   char(1)      not null comment '업체승인여부', -- 업체승인여부
  cname   varchar(50)  not null comment '업체명', -- 업체명
  ctype   varchar(50)  not null comment '업체종류', -- 업체종류
  pst_no  varchar(10)  null     comment '우편번호', -- 우편번호
  bas_adr varchar(255) null     comment '기본주소', -- 기본주소
  det_adr varchar(255) null     comment '상세주소', -- 상세주소
  map_loc varchar(255) null     comment '지도좌표', -- 지도좌표
  detail  text         null     comment '업체상세정보', -- 업체상세정보
  minfo   text         null     comment '업체추가정보', -- 업체추가정보
  pr_ti   text         null     comment '요금및시간', -- 요금및시간
  notice  text         null     comment '업체공지사항', -- 업체공지사항
  otime   date         null     comment '서비스시작시간', -- 서비스시작시간
  ctime   date         null     comment '서비스종료시간' -- 서비스종료시간
)
comment '업체';

-- 업체
alter table memb_store
  add constraint pk_memb_store -- 업체 기본키
    primary key (
      msno -- 업체일련번호
    );

-- 업체 유니크 인덱스
create unique index uix_memb_store
  on memb_store ( -- 업체
    crno asc -- 사업자번호
  );

-- 업체 유니크 인덱스2
create unique index uix_memb_store2
  on memb_store ( -- 업체
  );

-- 찜
create table favor (
  mno  integer not null comment '회원일련번호', -- 회원일련번호
  msno integer not null comment '업체일련번호' -- 업체일련번호
)
comment '찜';

-- 찜
alter table favor
  add constraint pk_favor -- 찜 기본키
    primary key (
      mno,  -- 회원일련번호
      msno  -- 업체일련번호
    );

-- 스탬프
create table stmp (
  mno  integer not null comment '회원일련번호', -- 회원일련번호
  msno integer not null comment '업체일련번호', -- 업체일련번호
  cnt  integer null     comment '적립개수' -- 적립개수
)
comment '스탬프';

-- 스탬프
alter table stmp
  add constraint pk_stmp -- 스탬프 기본키
    primary key (
      mno,  -- 회원일련번호
      msno  -- 업체일련번호
    );

-- 스탬프혜택
create table stmp_bnf (
  sbno    integer      not null comment '스탬프혜택일련번호', -- 스탬프혜택일련번호
  msno    integer      not null comment '업체일련번호', -- 업체일련번호
  sb_cnt  integer      not null comment '스탬프개수', -- 스탬프개수
  sb_cont varchar(255) not null comment '혜택내용' -- 혜택내용
)
comment '스탬프혜택';

-- 스탬프혜택
alter table stmp_bnf
  add constraint pk_stmp_bnf -- 스탬프혜택 기본키
    primary key (
      sbno -- 스탬프혜택일련번호
    );

alter table stmp_bnf
  modify column sbno integer not null auto_increment comment '스탬프혜택일련번호';

-- 업체전화번호
create table ms_tel (
  mtno  integer     not null comment '업체전화번호일련번호', -- 업체전화번호일련번호
  msno  integer     not null comment '업체일련번호', -- 업체일련번호
  mstel varchar(30) not null comment '전화번호' -- 전화번호
)
comment '업체전화번호';

-- 업체전화번호
alter table ms_tel
  add constraint pk_ms_tel -- 업체전화번호 기본키
    primary key (
      mtno -- 업체전화번호일련번호
    );

alter table ms_tel
  modify column mtno integer not null auto_increment comment '업체전화번호일련번호';

-- 업체사진
create table ms_phot (
  mpno integer      not null comment '업체사진일련번호', -- 업체사진일련번호
  msno integer      not null comment '업체일련번호', -- 업체일련번호
  path varchar(255) not null comment '파일경로' -- 파일경로
)
comment '업체사진';

-- 업체사진
alter table ms_phot
  add constraint pk_ms_phot -- 업체사진 기본키
    primary key (
      mpno -- 업체사진일련번호
    );

alter table ms_phot
  modify column mpno integer not null auto_increment comment '업체사진일련번호';

-- 스탬프로그
create table stmp_log (
  slno integer     not null comment '로그일련번호', -- 로그일련번호
  mno  integer     not null comment '회원일련번호', -- 회원일련번호
  msno integer     not null comment '업체일련번호', -- 업체일련번호
  chng integer     null     comment '스탬프변동개수', -- 스탬프변동개수
  pm   varchar(50) null     comment '스탬프증감', -- 스탬프증감
  chdt datetime    null     comment '일자' -- 일자
)
comment '스탬프로그';

-- 스탬프로그
alter table stmp_log
  add constraint pk_stmp_log -- 스탬프로그 기본키
    primary key (
      slno -- 로그일련번호
    );

alter table stmp_log
  modify column slno integer not null auto_increment comment '로그일련번호';

-- 상품
alter table item
  add constraint fk_memb_store_to_item -- 업체 -> 상품
    foreign key (
      msno -- 업체일련번호
    )
    references memb_store ( -- 업체
      msno -- 업체일련번호
    );

-- 고객센터
alter table sc
  add constraint fk_memb_to_sc -- 회원 -> 고객센터
    foreign key (
      mno -- 작성자회원일련번호
    )
    references memb ( -- 회원
      mno -- 회원일련번호
    );

-- 업체리뷰
alter table review
  add constraint fk_memb_to_review -- 회원 -> 업체리뷰
    foreign key (
      mno -- 회원일련번호
    )
    references memb ( -- 회원
      mno -- 회원일련번호
    );

-- 업체리뷰
alter table review
  add constraint fk_memb_store_to_review -- 업체 -> 업체리뷰
    foreign key (
      msno -- 업체일련번호
    )
    references memb_store ( -- 업체
      msno -- 업체일련번호
    );

-- 리뷰댓글
alter table rv_cmt
  add constraint fk_memb_store_to_rv_cmt -- 업체 -> 리뷰댓글
    foreign key (
      msno -- 업체일련번호
    )
    references memb_store ( -- 업체
      msno -- 업체일련번호
    );

-- 리뷰댓글
alter table rv_cmt
  add constraint fk_memb_to_rv_cmt -- 회원 -> 리뷰댓글
    foreign key (
      mno -- 회원일련번호
    )
    references memb ( -- 회원
      mno -- 회원일련번호
    );

-- 예약구매
alter table buy
  add constraint fk_memb_to_buy -- 회원 -> 예약구매
    foreign key (
      mno -- 회원일련번호
    )
    references memb ( -- 회원
      mno -- 회원일련번호
    );

-- 예약구매
alter table buy
  add constraint fk_item_to_buy -- 상품 -> 예약구매
    foreign key (
      ino -- 상품일련번호
    )
    references item ( -- 상품
      ino -- 상품일련번호
    );

-- 업체
alter table memb_store
  add constraint fk_memb_to_memb_store -- 회원 -> 업체
    foreign key (
      msno -- 업체일련번호
    )
    references memb ( -- 회원
      mno -- 회원일련번호
    );

-- 찜
alter table favor
  add constraint fk_memb_to_favor -- 회원 -> 찜
    foreign key (
      mno -- 회원일련번호
    )
    references memb ( -- 회원
      mno -- 회원일련번호
    );

-- 찜
alter table favor
  add constraint fk_memb_store_to_favor -- 업체 -> 찜
    foreign key (
      msno -- 업체일련번호
    )
    references memb_store ( -- 업체
      msno -- 업체일련번호
    );

-- 스탬프
alter table stmp
  add constraint fk_memb_to_stmp -- 회원 -> 스탬프
    foreign key (
      mno -- 회원일련번호
    )
    references memb ( -- 회원
      mno -- 회원일련번호
    );

-- 스탬프
alter table stmp
  add constraint fk_memb_store_to_stmp -- 업체 -> 스탬프
    foreign key (
      msno -- 업체일련번호
    )
    references memb_store ( -- 업체
      msno -- 업체일련번호
    );

-- 스탬프혜택
alter table stmp_bnf
  add constraint fk_memb_store_to_stmp_bnf -- 업체 -> 스탬프혜택
    foreign key (
      msno -- 업체일련번호
    )
    references memb_store ( -- 업체
      msno -- 업체일련번호
    );

-- 업체전화번호
alter table ms_tel
  add constraint fk_memb_store_to_ms_tel -- 업체 -> 업체전화번호
    foreign key (
      msno -- 업체일련번호
    )
    references memb_store ( -- 업체
      msno -- 업체일련번호
    );

-- 업체사진
alter table ms_phot
  add constraint fk_memb_store_to_ms_phot -- 업체 -> 업체사진
    foreign key (
      msno -- 업체일련번호
    )
    references memb_store ( -- 업체
      msno -- 업체일련번호
    );

-- 스탬프로그
alter table stmp_log
  add constraint fk_stmp_to_stmp_log -- 스탬프 -> 스탬프로그
    foreign key (
      mno,  -- 회원일련번호
      msno  -- 업체일련번호
    )
    references stmp ( -- 스탬프
      mno,  -- 회원일련번호
      msno  -- 업체일련번호
    );
