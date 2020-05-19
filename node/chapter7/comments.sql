CREATE TABLE comments
(
    id         INT          NOT NULL AUTO_INCREMENT,
    commenter  INT          NOT NULL,
    comment    VARCHAR(100) NOT NULL,
    created_at DATETIME     NOT NULL DEFAULT now(),
    PRIMARY KEY (id),
    INDEX commenter_idx (commenter ASC),
    CONSTRAINT commenter FOREIGN KEY (commenter)
        REFERENCES users (id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
)

COMMENT = '댓글'
DEFAULT CHARSET = utf8
ENGINE = InnoDB;
