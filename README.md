# Full Stack Application

- NestJS
- GraphQL
- Apache Kafka
- Next.js
- Apollo Client (GraphQL)

### Purchases service

- [Admin] Product registration
- [Admin] Product listing

- [Auth] Shopping list

- [Public] Purchase of a product
- [Public] List products available for purchase

### Classroom

- [Admin] List enrollments
- [Admin] List students
- [Admin] List courses
- [Admin] Register courses

- [Auth] List courses I have access to
- [Auth] Access course content

## Install

#### Auth

```bash
cd web
npm install
```

#### Purchases

```bash
cd purchases
npm install

# Prisma studio
# Prisma Studio is up on http://localhost:5555
npx prisma studio
```

#### Classroom

```bash
cd classroom
npm install
```

#### Gateway

```bash
cd gateway
npm install
```

## Usage

```bash
# Docker Compose
docker-compose -up -d

npm install
npm run start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the login screen.

#### GraphQl

Open [http://localhost:3333/graphql](http://localhost:3333/graphql) with your browser to see the GraphQl of Purchases.

Open [http://localhost:3334/graphql](http://localhost:3334/graphql) with your browser to see the GraphQl of Classroom.

Open [http://localhost:3332/graphql](http://localhost:3332/graphql) with your browser to see the integration GraphQl for the Purchases and Classroom.

Open [http://localhost:8080](http://localhost:8080) with your browser to see the UI for Apache Kafka.
