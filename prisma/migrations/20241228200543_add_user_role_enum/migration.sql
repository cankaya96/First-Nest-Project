-- CreateEnum
CREATE TYPE "Role" AS ENUM ('Admin', 'Guest');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'Guest';
