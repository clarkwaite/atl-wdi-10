
drop table if exists players;
drop table if exists teams;

create table apartment(
    id serial primary key,
    apartment_number number not null,
    bedrooms varchar(255),
    bathrooms varchar(255),
    address varchar(255) not null,
    tenant varchar(255),
    occupied boolean,
    square_feet integer,
    price integer
);

create table office(
    id serial primary key,
    address varchar(255) not null,
    office_number number not null,
    price integer
    floors number,
    square_feet integer,
    cubicles integer,
    bathrooms integer,
    company varchar(255),
    occupied boolean,
);

create table storefront(
    id serial primary key,
    address varchar(255) not null,
    occupied boolean,
    price integer
    kitchen boolean,
    square_feet integer,
    owner varchar(255),
    outdoor_seating boolean
);
