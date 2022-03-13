# Job Search App

# Components Tree

App

- MainLayout

  - NavBar
  - SearchContainer
    - SearchBox
  - TimeLine
    - Card
    - SearchHistory # as Children

- SecondaryLayout
  - NavBar
  - Details.
    - RelatedCard
  - SearchHistory # as Children

# Job Search App Requirements:

- [x] Implement a header with navigation and different page layouts.

- Search box

  - [x] Add autocomplete.
  - [x] Add debounce.
  - [x] Make the API calls only if the user has typed 3 or more characters.
  - [x] If the user clears the results and shows the all jobs screen.

- All jobs screen

  - [x] Display all jobs from the API, show only the first 12 jobs and update the total jobs count.
  - [x] When the user starts typing the search query after 3 letters you should navigate to the search page with the typed query.
  - [x] Display job data with link to skill screen screen.
  - [x] Infinite scrolling.

- Search jobs screen

  - [x] Display search results
  - [x] Handle no search results.
  - [x] persist search data

- Job screen

  - [x] Display the job information.

- Skill screen
  - [x] Display the skill information..

# TODO list

- [x] implement project structure
- [x] create main components
- [x] add routing.
- [x] main components styles
  - [x] Search input
  - [x] Card
  - [x] History Section
- [x] add redux
- [x] All jobs
  - [x] Load all jobs data
  - [x] Load more data on scroll
