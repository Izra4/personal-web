-- CreateTable
CREATE TABLE `shorteners` (
    `id` VARCHAR(191) NOT NULL,
    `long_url` VARCHAR(255) NOT NULL,
    `short_url` VARCHAR(255) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
