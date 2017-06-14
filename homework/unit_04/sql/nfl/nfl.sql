
1.  List the names of all NFL teams
    
    SELECT name FROM teams;

2.  List the stadium name and head coach of all NFC teams
     
    SELECT stadium, head_coach FROM teams WHERE conference = 'NFC';

3.  List the head coaches of the AFC South

    SELECT head_coach FROM teams WHERE conference = 'AFC' AND division = 'South';

4.  The total number of players in the NFL

    SELECT COUNT(id) FROM players;


5.  The team names and head coaches of the NFC North and AFC East

    SELECT head_coach, name  FROM teams WHERE conference = 'AFC' AND division = 'East' OR conference = 'NFC' AND division = 'North';

6.  The 50 players with the highest salaries

    SELECT * FROM players ORDER BY salary DESC limit 50

7.  The average salary of all NFL players

    SELECT AVG(salary) FROM players;

8.  The names and positions of players with a salary above 10_000_000

    SELECT name, position FROM players WHERE salary > 10000000;

9.  The player with the highest salary in the NFL

    SELECT * FROM players ORDER BY salary DESC limit 1;

10. The name and position of the first 100 players with the lowest salaries

    SELECT name, position  FROM players ORDER BY salary ASC limit 100;

11. The average salary for a DE in the nfl

    SELECT AVG(salary) FROM players WHERE position = 'DE';

12. The names of all the players on the Buffalo Bills

    SELECT players.name, teams.name FROM players, teams WHERE players.team_id=teams.id AND teams.name = 'Buffalo Bills';

13. The total salary of all players on the New York Giants

    SELECT SUM(players.salary) FROM players, teams WHERE players.team_id=teams.id AND  teams.name = 'New York Giants';

14. The player with the lowest salary on the Green Bay Packers

SELECT players.name FROM players, teams WHERE players.team_id=teams.id AND teams.name = 'Green Bay Packers' ORDER BY salary ASC LIMIT 1;
