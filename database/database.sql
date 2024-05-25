CREATE TABLE `Profile`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `profile_picture_url` VARCHAR(255) NOT NULL,
    `bio` TEXT NOT NULL,
    `user_id_fkd` BIGINT NOT NULL
);
CREATE TABLE `Member`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `user_id_fk` BIGINT NOT NULL,
    `role_id_fk` BIGINT NOT NULL,
    `school_id_fk` BIGINT NOT NULL
);
CREATE TABLE `User`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `username` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `first_name` VARCHAR(255) NOT NULL,
    `last_name` VARCHAR(255) NOT NULL,
    `date_created` TIMESTAMP NOT NULL,
    `last_login` TIMESTAMP NOT NULL
);
CREATE TABLE `Audit`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `user_id_fk` BIGINT NOT NULL,
    `activity_type` VARCHAR(255) NOT NULL,
    `timestamp` TIMESTAMP NOT NULL,
    `description` TEXT NOT NULL
);
CREATE TABLE `Module`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `school_id_fk` BIGINT NOT NULL,
    `name` BIGINT NOT NULL,
    `description` TEXT NOT NULL,
    `credits` BIGINT NOT NULL,
    `department` VARCHAR(255) NOT NULL
);
CREATE TABLE `Registered`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `student_id_fk` BIGINT NOT NULL,
    `module_id_fk` BIGINT NOT NULL
);
CREATE TABLE `Role`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL,
    `description` TEXT NOT NULL,
    `school_id_fk` BIGINT NOT NULL
);
CREATE TABLE `School`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `owner_user_id_fk` BIGINT NOT NULL,
    `school_name` VARCHAR(255) NOT NULL,
    `description` TEXT NOT NULL,
    `thumbail_url` TEXT NOT NULL
);
CREATE TABLE `Permission-Role`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `role_id_fk` BIGINT NOT NULL,
    `permission_id_fk` BIGINT NOT NULL
);
CREATE TABLE `Permission`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL,
    `description` TEXT NOT NULL
);
ALTER TABLE
    `Permission-Role` ADD CONSTRAINT `permission_role_role_id_fk_foreign` FOREIGN KEY(`role_id_fk`) REFERENCES `Role`(`id`);
ALTER TABLE
    `Role` ADD CONSTRAINT `role_school_id_fk_foreign` FOREIGN KEY(`school_id_fk`) REFERENCES `School`(`id`);
ALTER TABLE
    `School` ADD CONSTRAINT `school_owner_user_id_fk_foreign` FOREIGN KEY(`owner_user_id_fk`) REFERENCES `User`(`id`);
ALTER TABLE
    `Module` ADD CONSTRAINT `module_school_id_fk_foreign` FOREIGN KEY(`school_id_fk`) REFERENCES `School`(`id`);
ALTER TABLE
    `Audit` ADD CONSTRAINT `audit_user_id_fk_foreign` FOREIGN KEY(`user_id_fk`) REFERENCES `User`(`id`);
ALTER TABLE
    `Member` ADD CONSTRAINT `member_user_id_fk_foreign` FOREIGN KEY(`user_id_fk`) REFERENCES `User`(`id`);
ALTER TABLE
    `Registered` ADD CONSTRAINT `registered_student_id_fk_foreign` FOREIGN KEY(`student_id_fk`) REFERENCES `User`(`username`);
ALTER TABLE
    `Profile` ADD CONSTRAINT `profile_user_id_fkd_foreign` FOREIGN KEY(`user_id_fkd`) REFERENCES `User`(`id`);
ALTER TABLE
    `Member` ADD CONSTRAINT `member_school_id_fk_foreign` FOREIGN KEY(`school_id_fk`) REFERENCES `School`(`id`);
ALTER TABLE
    `Permission-Role` ADD CONSTRAINT `permission_role_permission_id_fk_foreign` FOREIGN KEY(`permission_id_fk`) REFERENCES `Permission`(`id`);
ALTER TABLE
    `Registered` ADD CONSTRAINT `registered_module_id_fk_foreign` FOREIGN KEY(`module_id_fk`) REFERENCES `Module`(`id`);
ALTER TABLE
    `Member` ADD CONSTRAINT `member_role_id_fk_foreign` FOREIGN KEY(`role_id_fk`) REFERENCES `Role`(`id`);