import {PrismaClient} from "@prisma/client"

const prisma = new PrismaClient({});

export async function main () {
  const user = prisma.user.create({
    data: {
      name: 'Richard Walter the First',
      country: 'RUSSIA',
      trips: {
        create: [
          {
            tripId: 1,
            visitedPlaces: {
              create: {
                places: 'Marocco'
              }
            }
          },
          {
            tripId: 2,
            visitedPlaces: {
              create: [
                {
                  places: 'Venedic'
                },
                {
                  places: 'Austria'
                }
              ]
            }
          }
        ]
      }
    }
  })
}

main()