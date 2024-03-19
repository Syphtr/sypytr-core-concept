import {
  Field,
  Int,
  ObjectType,
  GraphQLISODateTime,
  Float,
  ID,
} from '@nestjs/graphql';
// Import other types as needed

import { Profile as ProfileDB } from '@prisma/client';

@ObjectType()
export class Profile {
  @Field(() => ID)
  id: ProfileDB['id'];

  @Field(() => String, { nullable: true })
  public_identifier?: string;

  @Field(() => String, { nullable: true })
  first_name?: string;

  @Field(() => String, { nullable: true })
  last_name?: string;

  @Field(() => String, { nullable: true })
  full_name?: string;

  @Field(() => String, { nullable: true })
  city?: string;

  @Field(() => String, { nullable: true })
  state?: string;

  @Field(() => String, { nullable: true })
  country?: string;

  @Field(() => String, { nullable: true })
  country_full_name?: string;

  @Field(() => String, { nullable: true })
  summary?: string;

  @Field(() => String, { nullable: true })
  profile_pic_url?: string;

  @Field(() => String, { nullable: true })
  background_cover_image_url?: string;

  @Field(() => String, { nullable: true })
  headline?: string;

  @Field(() => String, { nullable: true })
  occupation?: string;

  @Field(() => Int, { nullable: true })
  connections?: number;

  @Field(() => Int, { nullable: true })
  follower_count?: number;

  @Field(() => [String], { nullable: true })
  recommendations?: string[];

  @Field(() => [String], { nullable: true })
  skills?: string[];

  @Field(() => GraphQLISODateTime, { nullable: true })
  last_updated?: Date;

  @Field(() => String)
  linkedin_profile_url: string;

  @Field(() => String, { nullable: true })
  email?: string;

  @Field(() => String, { nullable: true })
  phone?: string;

  @Field(() => [AccomplishmentOrg], { nullable: true })
  AccomplishmentOrg?: AccomplishmentOrg[];

  @Field(() => [Activity], { nullable: true })
  Activity?: Activity[];

  @Field(() => [Article], { nullable: true })
  Article?: Article[];

  @Field(() => [CandidateStage], { nullable: true })
  CandidateStage?: CandidateStage[];

  @Field(() => [Certification], { nullable: true })
  Certification?: Certification[];

  @Field(() => [Course], { nullable: true })
  Course?: Course[];

  @Field(() => [Education], { nullable: true })
  Education?: Education[];

  @Field(() => [Experience], { nullable: true })
  Experience?: Experience[];

  @Field(() => [Group], { nullable: true })
  Group?: Group[];

  @Field(() => [HonourAward], { nullable: true })
  HonourAward?: HonourAward[];

  @Field(() => [Language], { nullable: true })
  Language?: Language[];

  @Field(() => [Patent], { nullable: true })
  Patent?: Patent[];

  @Field(() => [PeopleAlsoViewed], { nullable: true })
  PeopleAlsoViewed?: PeopleAlsoViewed[];

  @Field(() => [Product], { nullable: true })
  Product?: Product[];

  @Field(() => [Project], { nullable: true })
  Project?: Project[];

  @Field(() => [Publication], { nullable: true })
  Publication?: Publication[];

  @Field(() => [SimilarProfile], { nullable: true })
  SimilarProfile?: SimilarProfile[];

  @Field(() => [TestScore], { nullable: true })
  TestScore?: TestScore[];

  @Field(() => [VolunteerWork], { nullable: true })
  VolunteerWork?: VolunteerWork[];

  @Field(() => [Job], { nullable: true })
  Job?: Job[];
}

@ObjectType()
class Course {
  @Field(() => ID)
  id: number;

  @Field(() => Int)
  profileId: number;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => String, { nullable: true })
  number?: string;
}

@ObjectType()
class Education {
  @Field(() => ID)
  id: number;

  @Field(() => Int)
  profileId: number;

  @Field(() => String)
  school: string;

  @Field(() => String)
  degree_name: string;

  @Field(() => String, { nullable: true })
  field_of_study?: string;

  @Field(() => GraphQLISODateTime, { nullable: true })
  starts_at?: Date;

  @Field(() => GraphQLISODateTime, { nullable: true })
  ends_at?: Date;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => String, { nullable: true })
  activities_and_societies?: string;

  @Field(() => String, { nullable: true })
  grade?: string;

  @Field(() => String, { nullable: true })
  logo_url?: string;

  @Field(() => String, { nullable: true })
  school_linkedin_profile_url?: string;
}

@ObjectType()
class Experience {
  @Field(() => ID)
  id: number;

  @Field(() => Int)
  profileId: number;

  @Field(() => String)
  company: string;

  @Field(() => String)
  title: string;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => String, { nullable: true })
  location?: string;

  @Field(() => GraphQLISODateTime, { nullable: true })
  starts_at?: Date;

  @Field(() => GraphQLISODateTime, { nullable: true })
  ends_at?: Date;

  @Field(() => String, { nullable: true })
  company_linkedin_profile_url?: string;

  @Field(() => String, { nullable: true })
  logo_url?: string;
}

@ObjectType()
class Group {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  profileId: number;

  @Field(() => String, { nullable: true })
  profilePicUrl?: string;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => String, { nullable: true })
  url?: string;
}

@ObjectType()
class HonourAward {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  profileId: number;

  @Field(() => String, { nullable: true })
  title?: string;

  @Field(() => String, { nullable: true })
  issuer?: string;

  @Field(() => GraphQLISODateTime, { nullable: true })
  issuedOn?: Date;

  @Field(() => String, { nullable: true })
  description?: string;
}

@ObjectType()
class Language {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  profileId: number;

  @Field(() => String)
  language: string;
}

@ObjectType()
class Patent {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  profileId: number;

  @Field(() => String, { nullable: true })
  title?: string;

  @Field(() => String, { nullable: true })
  issuer?: string;

  @Field(() => GraphQLISODateTime, { nullable: true })
  issuedOn?: Date;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => String, { nullable: true })
  applicationNumber?: string;

  @Field(() => String, { nullable: true })
  patentNumber?: string;

  @Field(() => String, { nullable: true })
  url?: string;
}

@ObjectType()
class PeopleAlsoViewed {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  profileId: number;

  @Field(() => String, { nullable: true })
  link?: string;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => String, { nullable: true })
  summary?: string;

  @Field(() => String, { nullable: true })
  location?: string;
}

@ObjectType()
class Product {
  @Field(() => Int)
  id: number;

  @Field(() => String, { nullable: true })
  name?: string;
}

@ObjectType()
class Project {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  profileId: number;

  @Field(() => String, { nullable: true })
  title?: string;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => String, { nullable: true })
  url?: string;

  @Field(() => GraphQLISODateTime, { nullable: true })
  startsAt?: Date;

  @Field(() => GraphQLISODateTime, { nullable: true })
  endsAt?: Date;
}

@ObjectType()
class Publication {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  profileId: number;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => String, { nullable: true })
  publisher?: string;

  @Field(() => GraphQLISODateTime, { nullable: true })
  publishedOn?: Date;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => String, { nullable: true })
  url?: string;
}

@ObjectType()
class SimilarProfile {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  profileId: number;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => String, { nullable: true })
  link?: string;

  @Field(() => String, { nullable: true })
  summary?: string;

  @Field(() => String, { nullable: true })
  location?: string;
}

@ObjectType()
class TestScore {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  profileId: number;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => String, { nullable: true })
  score?: string;

  @Field(() => GraphQLISODateTime, { nullable: true })
  dateOn?: Date;

  @Field(() => String, { nullable: true })
  description?: string;
}

@ObjectType()
class VolunteerWork {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  profileId: number;

  @Field(() => String, { nullable: true })
  cause?: string;

  @Field(() => String, { nullable: true })
  company?: string;

  @Field(() => String, { nullable: true })
  companyLinkedinProfileUrl?: string;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => GraphQLISODateTime, { nullable: true })
  endsAt?: Date;

  @Field(() => String, { nullable: true })
  logoUrl?: string;

  @Field(() => GraphQLISODateTime, { nullable: true })
  startsAt?: Date;

  @Field(() => String, { nullable: true })
  title?: string;
}

@ObjectType()
class AccomplishmentOrg {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  profileId: number;

  @Field(() => String, { nullable: true })
  orgName?: string;

  @Field(() => String, { nullable: true })
  title?: string;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => GraphQLISODateTime, { nullable: true })
  startsAt?: Date;

  @Field(() => GraphQLISODateTime, { nullable: true })
  endsAt?: Date;
}

@ObjectType()
class Activity {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  profileId: number;

  @Field(() => String, { nullable: true })
  activityStatus?: string;

  @Field(() => String, { nullable: true })
  link?: string;

  @Field(() => String, { nullable: true })
  title?: string;
}

@ObjectType()
class Article {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  profileId: number;

  @Field(() => String, { nullable: true })
  title?: string;

  @Field(() => String, { nullable: true })
  link?: string;

  @Field(() => GraphQLISODateTime, { nullable: true })
  publishedDate?: Date;

  @Field(() => String, { nullable: true })
  author?: string;

  @Field(() => String, { nullable: true })
  imageUrl?: string;
}

@ObjectType()
class CandidateStage {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  profileId: number;

  @Field(() => Int)
  jobId: number;

  @Field(() => String)
  stage: string;

  @Field(() => Float, { nullable: true })
  categoryScore?: number;

  @Field(() => Float, { nullable: true })
  comfortZoneScore?: number;

  @Field(() => Float, { nullable: true })
  overallScore?: number;

  @Field(() => Float, { nullable: true })
  stabilityScore?: number;

  @Field(() => Float, { nullable: true })
  recentCategoryScore?: number;
}

@ObjectType()
class Certification {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  profileId: number;

  @Field(() => String, { nullable: true })
  authority?: string;

  @Field(() => String, { nullable: true })
  displaySource?: string;

  @Field(() => GraphQLISODateTime, { nullable: true })
  endsAt?: Date;

  @Field(() => String, { nullable: true })
  licenseNumber?: string;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => GraphQLISODateTime, { nullable: true })
  startsAt?: Date;

  @Field(() => String, { nullable: true })
  url?: string;
}

@ObjectType()
class Job {
  @Field(() => Int)
  id: number;

  @Field(() => Int, { nullable: true })
  clientId?: number;

  @Field(() => String, { nullable: true })
  department?: string;

  @Field(() => String, { nullable: true })
  businessUnit?: string;

  @Field(() => [String], { nullable: true })
  hiringTeam?: string[];

  @Field(() => String, { nullable: true })
  title?: string;

  @Field(() => Int, { nullable: true })
  salary?: number;

  @Field(() => String, { nullable: true })
  currency?: string;

  @Field(() => GraphQLISODateTime, { nullable: true })
  openSince?: Date;

  @Field(() => GraphQLISODateTime, { nullable: true })
  createdAt?: Date;

  @Field(() => GraphQLISODateTime, { nullable: true })
  updatedAt?: Date;

  @Field(() => String, { nullable: true })
  userId?: string;

  @Field(() => String, { nullable: true })
  description?: string;
}
