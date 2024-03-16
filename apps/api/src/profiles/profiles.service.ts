import { Injectable } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { PrismaService } from '../utils/prisma.service';

@Injectable()
export class ProfilesService {
  constructor(private prisma: PrismaService) {}
  private readonly profiles = [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@example.com',
      age: 30,
      city: 'New York',
      country: 'USA',
    },
    {
      id: 2,
      firstName: 'Alice',
      lastName: 'Smith',
      email: 'alice@example.com',
      age: 25,
      city: 'Los Angeles',
      country: 'USA',
    },
    {
      id: 3,
      firstName: 'Michael',
      lastName: 'Johnson',
      email: 'michael@example.com',
      age: 35,
      city: 'Chicago',
      country: 'USA',
    },
    {
      id: 4,
      firstName: 'Emily',
      lastName: 'Brown',
      email: 'emily@example.com',
      age: 28,
      city: 'Houston',
      country: 'USA',
    },
    {
      id: 5,
      firstName: 'David',
      lastName: 'Williams',
      email: 'david@example.com',
      age: 32,
      city: 'Philadelphia',
      country: 'USA',
    },
    {
      id: 6,
      firstName: 'Sarah',
      lastName: 'Taylor',
      email: 'sarah@example.com',
      age: 27,
      city: 'Phoenix',
      country: 'USA',
    },
    {
      id: 7,
      firstName: 'James',
      lastName: 'Anderson',
      email: 'james@example.com',
      age: 40,
      city: 'San Antonio',
      country: 'USA',
    },
    {
      id: 8,
      firstName: 'Emma',
      lastName: 'Martinez',
      email: 'emma@example.com',
      age: 29,
      city: 'San Diego',
      country: 'USA',
    },
    {
      id: 9,
      firstName: 'Christopher',
      lastName: 'Hernandez',
      email: 'christopher@example.com',
      age: 33,
      city: 'Dallas',
      country: 'USA',
    },
    {
      id: 10,
      firstName: 'Olivia',
      lastName: 'Lopez',
      email: 'olivia@example.com',
      age: 31,
      city: 'San Jose',
      country: 'USA',
    },
  ];

  create(createProfileDto: CreateProfileDto) {
    console.log(createProfileDto);
    return 'This action adds a new profile';
  }

  findAll() {
    return this.profiles;
  }

  findOne(id: number) {
    const result = this.profiles.filter((profile) => id === profile.id);

    return result;
  }

  update(id: number, updateProfileDto: UpdateProfileDto) {
    return `This action updates a #${id} profile`;
  }

  remove(id: number) {
    return `This action removes a #${id} profile`;
  }
}
