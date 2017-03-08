-- 회원
DROP TABLE IF EXISTS MEMB RESTRICT;

-- 상품
DROP TABLE IF EXISTS ITEM RESTRICT;

-- 고객센터
DROP TABLE IF EXISTS SC RESTRICT;

-- 업체리뷰
DROP TABLE IF EXISTS REVIEW RESTRICT;

-- 리뷰댓글
DROP TABLE IF EXISTS RV_CMT RESTRICT;

-- 예약구매
DROP TABLE IF EXISTS BUY RESTRICT;

-- 업체
DROP TABLE IF EXISTS MEMB_STORE RESTRICT;

-- 찜
DROP TABLE IF EXISTS FAVOR RESTRICT;

-- 스탬프
DROP TABLE IF EXISTS STMP RESTRICT;

-- 스탬프혜택
DROP TABLE IF EXISTS STMP_BNF RESTRICT;

-- 업체전화번호
DROP TABLE IF EXISTS MS_TEL RESTRICT;

-- 업체사진
DROP TABLE IF EXISTS MS_PHOT RESTRICT;

-- 스탬프로그
DROP TABLE IF EXISTS STMP_LOG RESTRICT;

-- 회원
CREATE TABLE MEMB (
  MNO   INTEGER     NOT NULL COMMENT '회원일련번호', -- 회원일련번호
  NAME  VARCHAR(50) NOT NULL COMMENT '이름', -- 이름
  EMAIL VARCHAR(40) NOT NULL COMMENT '이메일', -- 이메일
  TEL   VARCHAR(30) NOT NULL COMMENT '휴대폰', -- 휴대폰
  CHCK  CHAR(1)     NOT NULL COMMENT '인증여부', -- 인증여부
  MGR   CHAR(1)     NULL     COMMENT '운영자여부' -- 운영자여부
)
COMMENT '회원';

-- 회원
ALTER TABLE MEMB
  ADD CONSTRAINT PK_MEMB -- 회원 기본키
    PRIMARY KEY (
      MNO -- 회원일련번호
    );

-- 회원 유니크 인덱스
CREATE UNIQUE INDEX UIX_MEMB
  ON MEMB ( -- 회원
    EMAIL ASC -- 이메일
  );

ALTER TABLE MEMB
  MODIFY COLUMN MNO INTEGER NOT NULL AUTO_INCREMENT COMMENT '회원일련번호';

-- 상품
CREATE TABLE ITEM (
  INO   INTEGER     NOT NULL COMMENT '상품일련번호', -- 상품일련번호
  MSNO  INTEGER     NOT NULL COMMENT '업체일련번호', -- 업체일련번호
  NAME  VARCHAR(50) NOT NULL COMMENT '이름', -- 이름
  PRICE INTEGER     NOT NULL COMMENT '요금', -- 요금
  UTIME INTEGER     NOT NULL COMMENT '시술시간' -- 시술시간
)
COMMENT '상품';

-- 상품
ALTER TABLE ITEM
  ADD CONSTRAINT PK_ITEM -- 상품 기본키
    PRIMARY KEY (
      INO -- 상품일련번호
    );

ALTER TABLE ITEM
  MODIFY COLUMN INO INTEGER NOT NULL AUTO_INCREMENT COMMENT '상품일련번호';

-- 고객센터
CREATE TABLE SC (
  SCNO   INTEGER      NOT NULL COMMENT '고객센터일련번호', -- 고객센터일련번호
  MNO    INTEGER      NOT NULL COMMENT '작성자회원일련번호', -- 작성자회원일련번호
  CRT    VARCHAR(50)  NOT NULL COMMENT '카테고리', -- 카테고리
  PRFX   VARCHAR(50)  NOT NULL COMMENT '말머리', -- 말머리
  TITL   VARCHAR(255) NOT NULL COMMENT '제목', -- 제목
  CONT   TEXT         NOT NULL COMMENT '내용', -- 내용
  REPL   TEXT         NULL     COMMENT '답글', -- 답글
  SC_RDT DATETIME     NOT NULL COMMENT '작성날짜' -- 작성날짜
)
COMMENT '고객센터';

-- 고객센터
ALTER TABLE SC
  ADD CONSTRAINT PK_SC -- 고객센터 기본키
    PRIMARY KEY (
      SCNO -- 고객센터일련번호
    );

ALTER TABLE SC
  MODIFY COLUMN SCNO INTEGER NOT NULL AUTO_INCREMENT COMMENT '고객센터일련번호';

-- 업체리뷰
CREATE TABLE REVIEW (
  MNO  INTEGER NOT NULL COMMENT '회원일련번호', -- 회원일련번호
  MSNO INTEGER NOT NULL COMMENT '업체일련번호', -- 업체일련번호
  FSCO INTEGER NULL     COMMENT '시설점수', -- 시설점수
  SSCO INTEGER NULL     COMMENT '서비스점수', -- 서비스점수
  CSCO INTEGER NULL     COMMENT '청결점수' -- 청결점수
)
COMMENT '업체리뷰';

-- 업체리뷰
ALTER TABLE REVIEW
  ADD CONSTRAINT PK_REVIEW -- 업체리뷰 기본키
    PRIMARY KEY (
      MNO,  -- 회원일련번호
      MSNO  -- 업체일련번호
    );

-- 리뷰댓글
CREATE TABLE RV_CMT (
  RVNO   INTEGER  NOT NULL COMMENT '리뷰댓글일련번호', -- 리뷰댓글일련번호
  MNO    INTEGER  NOT NULL COMMENT '회원일련번호', -- 회원일련번호
  MSNO   INTEGER  NOT NULL COMMENT '업체일련번호', -- 업체일련번호
  GRUP   INTEGER  NULL     COMMENT '그룹', -- 그룹
  LEVEL  INTEGER  NULL     COMMENT '레벨', -- 레벨
  SEQ    INTEGER  NULL     COMMENT '순서', -- 순서
  CONT   TEXT     NOT NULL COMMENT '내용', -- 내용
  RC_RDT DATETIME NOT NULL COMMENT '날짜' -- 날짜
)
COMMENT '리뷰댓글';

-- 리뷰댓글
ALTER TABLE RV_CMT
  ADD CONSTRAINT PK_RV_CMT -- 리뷰댓글 기본키
    PRIMARY KEY (
      RVNO -- 리뷰댓글일련번호
    );

ALTER TABLE RV_CMT
  MODIFY COLUMN RVNO INTEGER NOT NULL AUTO_INCREMENT COMMENT '리뷰댓글일련번호';

-- 예약구매
CREATE TABLE BUY (
  BNO    INTEGER     NOT NULL COMMENT '예약구매일련번호', -- 예약구매일련번호
  MNO    INTEGER     NOT NULL COMMENT '회원일련번호', -- 회원일련번호
  INO    INTEGER     NOT NULL COMMENT '상품일련번호', -- 상품일련번호
  PAY_OP VARCHAR(50) NOT NULL COMMENT '결제수단', -- 결제수단
  PAY_ST VARCHAR(50) NOT NULL COMMENT '결제상태', -- 결제상태
  SCTIME DATETIME    NOT NULL COMMENT '서비스받는시간', -- 서비스받는시간
  RP     INTEGER     NOT NULL COMMENT '인원' -- 인원
)
COMMENT '예약구매';

-- 예약구매
ALTER TABLE BUY
  ADD CONSTRAINT PK_BUY -- 예약구매 기본키
    PRIMARY KEY (
      BNO -- 예약구매일련번호
    );

ALTER TABLE BUY
  MODIFY COLUMN BNO INTEGER NOT NULL AUTO_INCREMENT COMMENT '예약구매일련번호';

-- 업체
CREATE TABLE MEMB_STORE (
  MSNO    INTEGER      NOT NULL COMMENT '업체일련번호', -- 업체일련번호
  CRNO    VARCHAR(100) NOT NULL COMMENT '사업자번호', -- 사업자번호
  CACHK   CHAR(1)      NOT NULL COMMENT '업체승인여부', -- 업체승인여부
  CNAME   VARCHAR(50)  NOT NULL COMMENT '업체명', -- 업체명
  CTYPE   VARCHAR(50)  NOT NULL COMMENT '업체종류', -- 업체종류
  PST_NO  VARCHAR(10)  NULL     COMMENT '우편번호', -- 우편번호
  BAS_ADR VARCHAR(255) NULL     COMMENT '기본주소', -- 기본주소
  DET_ADR VARCHAR(255) NULL     COMMENT '상세주소', -- 상세주소
  MAP_LOC VARCHAR(255) NULL     COMMENT '지도좌표', -- 지도좌표
  DETAIL  TEXT         NULL     COMMENT '업체상세정보', -- 업체상세정보
  MINFO   TEXT         NULL     COMMENT '업체추가정보', -- 업체추가정보
  PR_TI   TEXT         NULL     COMMENT '요금및시간', -- 요금및시간
  NOTICE  TEXT         NULL     COMMENT '업체공지사항', -- 업체공지사항
  OTIME   DATE         NULL     COMMENT '서비스시작시간', -- 서비스시작시간
  CTIME   DATE         NULL     COMMENT '서비스종료시간' -- 서비스종료시간
)
COMMENT '업체';

-- 업체
ALTER TABLE MEMB_STORE
  ADD CONSTRAINT PK_MEMB_STORE -- 업체 기본키
    PRIMARY KEY (
      MSNO -- 업체일련번호
    );

-- 업체 유니크 인덱스
CREATE UNIQUE INDEX UIX_MEMB_STORE
  ON MEMB_STORE ( -- 업체
    CRNO ASC -- 사업자번호
  );

-- 업체 유니크 인덱스2
CREATE UNIQUE INDEX UIX_MEMB_STORE2
  ON MEMB_STORE ( -- 업체
  );

-- 찜
CREATE TABLE FAVOR (
  MNO  INTEGER NOT NULL COMMENT '회원일련번호', -- 회원일련번호
  MSNO INTEGER NOT NULL COMMENT '업체일련번호' -- 업체일련번호
)
COMMENT '찜';

-- 찜
ALTER TABLE FAVOR
  ADD CONSTRAINT PK_FAVOR -- 찜 기본키
    PRIMARY KEY (
      MNO,  -- 회원일련번호
      MSNO  -- 업체일련번호
    );

-- 스탬프
CREATE TABLE STMP (
  MNO  INTEGER NOT NULL COMMENT '회원일련번호', -- 회원일련번호
  MSNO INTEGER NOT NULL COMMENT '업체일련번호', -- 업체일련번호
  CNT  INTEGER NULL     COMMENT '적립개수' -- 적립개수
)
COMMENT '스탬프';

-- 스탬프
ALTER TABLE STMP
  ADD CONSTRAINT PK_STMP -- 스탬프 기본키
    PRIMARY KEY (
      MNO,  -- 회원일련번호
      MSNO  -- 업체일련번호
    );

-- 스탬프혜택
CREATE TABLE STMP_BNF (
  SBNO    INTEGER      NOT NULL COMMENT '스탬프혜택일련번호', -- 스탬프혜택일련번호
  MSNO    INTEGER      NOT NULL COMMENT '업체일련번호', -- 업체일련번호
  SB_CNT  INTEGER      NOT NULL COMMENT '스탬프개수', -- 스탬프개수
  SB_CONT VARCHAR(255) NOT NULL COMMENT '혜택내용' -- 혜택내용
)
COMMENT '스탬프혜택';

-- 스탬프혜택
ALTER TABLE STMP_BNF
  ADD CONSTRAINT PK_STMP_BNF -- 스탬프혜택 기본키
    PRIMARY KEY (
      SBNO -- 스탬프혜택일련번호
    );

ALTER TABLE STMP_BNF
  MODIFY COLUMN SBNO INTEGER NOT NULL AUTO_INCREMENT COMMENT '스탬프혜택일련번호';

-- 업체전화번호
CREATE TABLE MS_TEL (
  MTNO  INTEGER     NOT NULL COMMENT '업체전화번호일련번호', -- 업체전화번호일련번호
  MSNO  INTEGER     NOT NULL COMMENT '업체일련번호', -- 업체일련번호
  MSTEL VARCHAR(30) NOT NULL COMMENT '전화번호' -- 전화번호
)
COMMENT '업체전화번호';

-- 업체전화번호
ALTER TABLE MS_TEL
  ADD CONSTRAINT PK_MS_TEL -- 업체전화번호 기본키
    PRIMARY KEY (
      MTNO -- 업체전화번호일련번호
    );

ALTER TABLE MS_TEL
  MODIFY COLUMN MTNO INTEGER NOT NULL AUTO_INCREMENT COMMENT '업체전화번호일련번호';

-- 업체사진
CREATE TABLE MS_PHOT (
  MPNO INTEGER      NOT NULL COMMENT '업체사진일련번호', -- 업체사진일련번호
  MSNO INTEGER      NOT NULL COMMENT '업체일련번호', -- 업체일련번호
  PATH VARCHAR(255) NOT NULL COMMENT '파일경로' -- 파일경로
)
COMMENT '업체사진';

-- 업체사진
ALTER TABLE MS_PHOT
  ADD CONSTRAINT PK_MS_PHOT -- 업체사진 기본키
    PRIMARY KEY (
      MPNO -- 업체사진일련번호
    );

ALTER TABLE MS_PHOT
  MODIFY COLUMN MPNO INTEGER NOT NULL AUTO_INCREMENT COMMENT '업체사진일련번호';

-- 스탬프로그
CREATE TABLE STMP_LOG (
  SLNO INTEGER     NOT NULL COMMENT '로그일련번호', -- 로그일련번호
  MNO  INTEGER     NOT NULL COMMENT '회원일련번호', -- 회원일련번호
  MSNO INTEGER     NOT NULL COMMENT '업체일련번호', -- 업체일련번호
  CHNG INTEGER     NULL     COMMENT '스탬프변동개수', -- 스탬프변동개수
  PM   VARCHAR(50) NULL     COMMENT '스탬프증감', -- 스탬프증감
  CHDT DATETIME    NULL     COMMENT '일자' -- 일자
)
COMMENT '스탬프로그';

-- 스탬프로그
ALTER TABLE STMP_LOG
  ADD CONSTRAINT PK_STMP_LOG -- 스탬프로그 기본키
    PRIMARY KEY (
      SLNO -- 로그일련번호
    );

ALTER TABLE STMP_LOG
  MODIFY COLUMN SLNO INTEGER NOT NULL AUTO_INCREMENT COMMENT '로그일련번호';

-- 상품
ALTER TABLE ITEM
  ADD CONSTRAINT FK_MEMB_STORE_TO_ITEM -- 업체 -> 상품
    FOREIGN KEY (
      MSNO -- 업체일련번호
    )
    REFERENCES MEMB_STORE ( -- 업체
      MSNO -- 업체일련번호
    );

-- 고객센터
ALTER TABLE SC
  ADD CONSTRAINT FK_MEMB_TO_SC -- 회원 -> 고객센터
    FOREIGN KEY (
      MNO -- 작성자회원일련번호
    )
    REFERENCES MEMB ( -- 회원
      MNO -- 회원일련번호
    );

-- 업체리뷰
ALTER TABLE REVIEW
  ADD CONSTRAINT FK_MEMB_TO_REVIEW -- 회원 -> 업체리뷰
    FOREIGN KEY (
      MNO -- 회원일련번호
    )
    REFERENCES MEMB ( -- 회원
      MNO -- 회원일련번호
    );

-- 업체리뷰
ALTER TABLE REVIEW
  ADD CONSTRAINT FK_MEMB_STORE_TO_REVIEW -- 업체 -> 업체리뷰
    FOREIGN KEY (
      MSNO -- 업체일련번호
    )
    REFERENCES MEMB_STORE ( -- 업체
      MSNO -- 업체일련번호
    );

-- 리뷰댓글
ALTER TABLE RV_CMT
  ADD CONSTRAINT FK_REVIEW_TO_RV_CMT -- 업체리뷰 -> 리뷰댓글
    FOREIGN KEY (
      MNO,  -- 회원일련번호
      MSNO  -- 업체일련번호
    )
    REFERENCES REVIEW ( -- 업체리뷰
      MNO,  -- 회원일련번호
      MSNO  -- 업체일련번호
    );

-- 예약구매
ALTER TABLE BUY
  ADD CONSTRAINT FK_MEMB_TO_BUY -- 회원 -> 예약구매
    FOREIGN KEY (
      MNO -- 회원일련번호
    )
    REFERENCES MEMB ( -- 회원
      MNO -- 회원일련번호
    );

-- 예약구매
ALTER TABLE BUY
  ADD CONSTRAINT FK_ITEM_TO_BUY -- 상품 -> 예약구매
    FOREIGN KEY (
      INO -- 상품일련번호
    )
    REFERENCES ITEM ( -- 상품
      INO -- 상품일련번호
    );

-- 업체
ALTER TABLE MEMB_STORE
  ADD CONSTRAINT FK_MEMB_TO_MEMB_STORE -- 회원 -> 업체
    FOREIGN KEY (
      MSNO -- 업체일련번호
    )
    REFERENCES MEMB ( -- 회원
      MNO -- 회원일련번호
    );

-- 찜
ALTER TABLE FAVOR
  ADD CONSTRAINT FK_MEMB_TO_FAVOR -- 회원 -> 찜
    FOREIGN KEY (
      MNO -- 회원일련번호
    )
    REFERENCES MEMB ( -- 회원
      MNO -- 회원일련번호
    );

-- 찜
ALTER TABLE FAVOR
  ADD CONSTRAINT FK_MEMB_STORE_TO_FAVOR -- 업체 -> 찜
    FOREIGN KEY (
      MSNO -- 업체일련번호
    )
    REFERENCES MEMB_STORE ( -- 업체
      MSNO -- 업체일련번호
    );

-- 스탬프
ALTER TABLE STMP
  ADD CONSTRAINT FK_MEMB_TO_STMP -- 회원 -> 스탬프
    FOREIGN KEY (
      MNO -- 회원일련번호
    )
    REFERENCES MEMB ( -- 회원
      MNO -- 회원일련번호
    );

-- 스탬프
ALTER TABLE STMP
  ADD CONSTRAINT FK_MEMB_STORE_TO_STMP -- 업체 -> 스탬프
    FOREIGN KEY (
      MSNO -- 업체일련번호
    )
    REFERENCES MEMB_STORE ( -- 업체
      MSNO -- 업체일련번호
    );

-- 스탬프혜택
ALTER TABLE STMP_BNF
  ADD CONSTRAINT FK_MEMB_STORE_TO_STMP_BNF -- 업체 -> 스탬프혜택
    FOREIGN KEY (
      MSNO -- 업체일련번호
    )
    REFERENCES MEMB_STORE ( -- 업체
      MSNO -- 업체일련번호
    );

-- 업체전화번호
ALTER TABLE MS_TEL
  ADD CONSTRAINT FK_MEMB_STORE_TO_MS_TEL -- 업체 -> 업체전화번호
    FOREIGN KEY (
      MSNO -- 업체일련번호
    )
    REFERENCES MEMB_STORE ( -- 업체
      MSNO -- 업체일련번호
    );

-- 업체사진
ALTER TABLE MS_PHOT
  ADD CONSTRAINT FK_MEMB_STORE_TO_MS_PHOT -- 업체 -> 업체사진
    FOREIGN KEY (
      MSNO -- 업체일련번호
    )
    REFERENCES MEMB_STORE ( -- 업체
      MSNO -- 업체일련번호
    );

-- 스탬프로그
ALTER TABLE STMP_LOG
  ADD CONSTRAINT FK_STMP_TO_STMP_LOG -- 스탬프 -> 스탬프로그
    FOREIGN KEY (
      MNO,  -- 회원일련번호
      MSNO  -- 업체일련번호
    )
    REFERENCES STMP ( -- 스탬프
      MNO,  -- 회원일련번호
      MSNO  -- 업체일련번호
    );
