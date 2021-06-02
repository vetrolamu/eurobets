/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      firstName
      lastName
      email
      room {
        items {
          id
          name
          userId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      firstName
      lastName
      email
      room {
        items {
          id
          name
          userId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      firstName
      lastName
      email
      room {
        items {
          id
          name
          userId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createRoom = /* GraphQL */ `
  mutation CreateRoom(
    $input: CreateRoomInput!
    $condition: ModelRoomConditionInput
  ) {
    createRoom(input: $input, condition: $condition) {
      id
      name
      userId
      user {
        id
        firstName
        lastName
        email
        room {
          nextToken
        }
        createdAt
        updatedAt
      }
      bets {
        items {
          id
          roomId
          userId
          game
          homeScore
          awayScore
          homeWins
          awayWins
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateRoom = /* GraphQL */ `
  mutation UpdateRoom(
    $input: UpdateRoomInput!
    $condition: ModelRoomConditionInput
  ) {
    updateRoom(input: $input, condition: $condition) {
      id
      name
      userId
      user {
        id
        firstName
        lastName
        email
        room {
          nextToken
        }
        createdAt
        updatedAt
      }
      bets {
        items {
          id
          roomId
          userId
          game
          homeScore
          awayScore
          homeWins
          awayWins
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteRoom = /* GraphQL */ `
  mutation DeleteRoom(
    $input: DeleteRoomInput!
    $condition: ModelRoomConditionInput
  ) {
    deleteRoom(input: $input, condition: $condition) {
      id
      name
      userId
      user {
        id
        firstName
        lastName
        email
        room {
          nextToken
        }
        createdAt
        updatedAt
      }
      bets {
        items {
          id
          roomId
          userId
          game
          homeScore
          awayScore
          homeWins
          awayWins
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createBet = /* GraphQL */ `
  mutation CreateBet(
    $input: CreateBetInput!
    $condition: ModelBetConditionInput
  ) {
    createBet(input: $input, condition: $condition) {
      id
      roomId
      userId
      game
      room {
        id
        name
        userId
        user {
          id
          firstName
          lastName
          email
          createdAt
          updatedAt
        }
        bets {
          nextToken
        }
        createdAt
        updatedAt
      }
      user {
        id
        firstName
        lastName
        email
        room {
          nextToken
        }
        createdAt
        updatedAt
      }
      homeScore
      awayScore
      homeWins
      awayWins
      createdAt
      updatedAt
    }
  }
`;
export const updateBet = /* GraphQL */ `
  mutation UpdateBet(
    $input: UpdateBetInput!
    $condition: ModelBetConditionInput
  ) {
    updateBet(input: $input, condition: $condition) {
      id
      roomId
      userId
      game
      room {
        id
        name
        userId
        user {
          id
          firstName
          lastName
          email
          createdAt
          updatedAt
        }
        bets {
          nextToken
        }
        createdAt
        updatedAt
      }
      user {
        id
        firstName
        lastName
        email
        room {
          nextToken
        }
        createdAt
        updatedAt
      }
      homeScore
      awayScore
      homeWins
      awayWins
      createdAt
      updatedAt
    }
  }
`;
export const deleteBet = /* GraphQL */ `
  mutation DeleteBet(
    $input: DeleteBetInput!
    $condition: ModelBetConditionInput
  ) {
    deleteBet(input: $input, condition: $condition) {
      id
      roomId
      userId
      game
      room {
        id
        name
        userId
        user {
          id
          firstName
          lastName
          email
          createdAt
          updatedAt
        }
        bets {
          nextToken
        }
        createdAt
        updatedAt
      }
      user {
        id
        firstName
        lastName
        email
        room {
          nextToken
        }
        createdAt
        updatedAt
      }
      homeScore
      awayScore
      homeWins
      awayWins
      createdAt
      updatedAt
    }
  }
`;