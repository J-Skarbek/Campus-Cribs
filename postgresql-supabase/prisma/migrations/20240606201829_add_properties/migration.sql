-- CreateTable
CREATE TABLE "Property" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "addressLine1" TEXT NOT NULL,
    "addressLine2" TEXT NOT NULL,
    "monthlyRent" INTEGER NOT NULL,
    "available" BOOLEAN NOT NULL DEFAULT true,
    "images" TEXT,
    "overview" TEXT NOT NULL,
    "detailsOne" TEXT,
    "detailsTwo" TEXT,
    "detailsThree" TEXT,

    CONSTRAINT "Property_pkey" PRIMARY KEY ("id")
);
