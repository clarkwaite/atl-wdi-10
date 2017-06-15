
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
    office_number number not null,
    floors number,
    square_feet integer,
    cubicles integer,
    bathrooms integer,
    address varchar(255) not null,
    company varchar(255),
    occupied boolean,
    price integer
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
