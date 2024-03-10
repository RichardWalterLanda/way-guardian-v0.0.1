-- CreateEnum
CREATE TYPE "Countries" AS ENUM ('CANADA', 'RUSSIA');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "country" "Countries" NOT NULL DEFAULT 'CANADA',

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Trip" (
    "id" SERIAL NOT NULL,
    "tripId" INTEGER NOT NULL,

    CONSTRAINT "Trip_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VisitedPlaces" (
    "id" SERIAL NOT NULL,
    "places" TEXT NOT NULL,

    CONSTRAINT "VisitedPlaces_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_TripToVisitedPlaces" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Trip_tripId_key" ON "Trip"("tripId");

-- CreateIndex
CREATE UNIQUE INDEX "_TripToVisitedPlaces_AB_unique" ON "_TripToVisitedPlaces"("A", "B");

-- CreateIndex
CREATE INDEX "_TripToVisitedPlaces_B_index" ON "_TripToVisitedPlaces"("B");

-- AddForeignKey
ALTER TABLE "Trip" ADD CONSTRAINT "Trip_tripId_fkey" FOREIGN KEY ("tripId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TripToVisitedPlaces" ADD CONSTRAINT "_TripToVisitedPlaces_A_fkey" FOREIGN KEY ("A") REFERENCES "Trip"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TripToVisitedPlaces" ADD CONSTRAINT "_TripToVisitedPlaces_B_fkey" FOREIGN KEY ("B") REFERENCES "VisitedPlaces"("id") ON DELETE CASCADE ON UPDATE CASCADE;
