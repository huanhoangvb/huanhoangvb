-- CreateTable
CREATE TABLE "student" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,

    CONSTRAINT "student_pkey" PRIMARY KEY ("id")
);
