CREATE TABLE users
(
    id         INT          NOT NULL AUTO_INCREMENT,
    name       VARCHAR(20)  NOT NULL,
    age        INT UNSIGNED NOT NULL,
    married    TINYINT      NOT NULL,
    comment    TEXT         NULL,
    created_at DATETIME     NOT NULL DEFAULT current_timestamp(),
    PRIMARY KEY (id),
    UNIQUE INDEX name_UNIQUE (name ASC)
)

COMMENT = '사용자 정보'
DEFAULT CHARSET=utf8
ENGINE = InnoDB;
