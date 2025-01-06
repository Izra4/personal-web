-- CreateTable
CREATE TABLE `roasts` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(255) NULL,
    `review` TEXT NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
