/*
  Warnings:

  - You are about to drop the `regis_demos` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `regis_demos`;

-- CreateTable
CREATE TABLE `addresses` (
    `id` VARCHAR(191) NOT NULL,
    `address` TEXT NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
