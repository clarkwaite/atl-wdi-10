Some queries may require more than one command (i.e. you may need to get information about a team before you can complete a query for players). Test each command in PSQL to make sure it is correct.

_Hint_: In order to do some parts you will need to research commands we did
not cover in class.

1.  List the names of all NFL teams
    
    SELECT name FROM teams;

2.  List the stadium name and head coach of all NFC teams
     
    SELECT stadium, head_coach FROM teams WHERE conference = 'NFC';

3.  List the head coaches of the AFC South

    SELECT head_coach FROM teams WHERE conference = 'AFC' AND division = 'South';

4.  The total number of players in the NFL

    SELECT COUNT(id) FROM players;

<hr>
&#x1F534; COMMIT 2<br>
"Commit: NFL - queried some NFL stuff"
<hr>

5.  The team names and head coaches of the NFC North and AFC East

    SELECT head_coach, name  FROM teams WHERE conference = 'AFC' AND division = 'East' OR conference = 'NFC' AND division = 'North';

6.  The 50 players with the highest salaries

    SELECT * FROM players ORDER BY salary DESC limit 50

7.  The average salary of all NFL players

    SELECT AVG(salary) FROM players;

8.  The names and positions of players with a salary above 10_000_000

    SELECT name, position FROM players WHERE salary > 10000000;

<hr>
&#x1F534; COMMIT 3<br>
"Commit: NFL - wow there's a lot of nfl data"
<hr>

9.  The player with the highest salary in the NFL
10. The name and position of the first 100 players with the lowest salaries
11. The average salary for a DE in the nfl
12. The names of all the players on the Buffalo Bills
13. The total salary of all players on the New York Giants
14. The player with the lowest salary on the Green Bay Packers

_Hint_: In order to do some parts you will need to research commands we did
not cover in class.

id |         name         |            stadium            | division | conference |   head_coach   | active
----+----------------------+-------------------------------+----------+------------+----------------+--------
  1 | Buffalo Bills        | Ralph Wilson Stadium          | East     | AFC        | Doug Marrone   | t
  2 | Miami Dolphins       | Sun Life Stadium              | East     | AFC        | Joe Philbin    | t
  3 | New England Patriots | Gillette Stadium              | East     | AFC        | Bill Belichick | t
  4 | New York Jets        | MetLife Stadium               | East     | AFC        | Rex Ryan       | t

   id  |            name             | position |  salary  | team_id
------+-----------------------------+----------+----------+---------
    1 | Mario Williams              | DE       |  5900000 |       1
    2 | Drayton Florence            | CB       |  4000000 |       1
    3 | Shawne Merriman             | LB       |  4000000 |       1
    4 | Dwan Edwards                | DT       |  3800000 |       1

    ORDER BY hit_pages DESC LIMIT 5