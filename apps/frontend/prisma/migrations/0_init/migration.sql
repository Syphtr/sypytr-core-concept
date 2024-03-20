-- CreateEnum
CREATE TYPE "CompanySize" AS ENUM ('SEED', 'STARTUP', 'SCALEUP', 'MID_SIZE', 'BIG', 'HUGE');

-- CreateEnum
CREATE TYPE "Stage" AS ENUM ('APPLIED', 'ADDED', 'SCREENING', 'SCREENED', 'FIRST_INTERVIEW', 'MID_INTERVIEWS', 'FINAL_INTERVIEW', 'HIRED');

-- CreateTable
CREATE TABLE "AccomplishmentOrg" (
    "id" SERIAL NOT NULL,
    "profileId" INTEGER NOT NULL,
    "orgName" TEXT,
    "title" TEXT,
    "description" TEXT,
    "startsAt" TIMESTAMP(3),
    "endsAt" TIMESTAMP(3),

    CONSTRAINT "AccomplishmentOrg_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Activity" (
    "id" SERIAL NOT NULL,
    "profileId" INTEGER NOT NULL,
    "activityStatus" TEXT,
    "link" TEXT,
    "title" TEXT,

    CONSTRAINT "Activity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Article" (
    "id" SERIAL NOT NULL,
    "profileId" INTEGER NOT NULL,
    "title" TEXT,
    "link" TEXT,
    "publishedDate" TIMESTAMP(3),
    "author" TEXT,
    "imageUrl" TEXT,

    CONSTRAINT "Article_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CandidateStage" (
    "id" SERIAL NOT NULL,
    "profileId" INTEGER NOT NULL,
    "jobId" INTEGER NOT NULL,
    "stage" "Stage" NOT NULL,
    "categoryScore" DOUBLE PRECISION,
    "comfortZoneScore" DOUBLE PRECISION,
    "overallScore" DOUBLE PRECISION,
    "stabilityScore" DOUBLE PRECISION,
    "recentCategoryScore" DOUBLE PRECISION,

    CONSTRAINT "CandidateStage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Certification" (
    "id" SERIAL NOT NULL,
    "profileId" INTEGER NOT NULL,
    "authority" TEXT,
    "displaySource" TEXT,
    "endsAt" TIMESTAMP(3),
    "licenseNumber" TEXT,
    "name" TEXT,
    "startsAt" TIMESTAMP(3),
    "url" TEXT,

    CONSTRAINT "Certification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Client" (
    "id" SERIAL NOT NULL,
    "name" TEXT,

    CONSTRAINT "Client_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Company" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "targetMarketSize" TEXT NOT NULL,
    "targetVertical" TEXT NOT NULL,
    "size" "CompanySize",

    CONSTRAINT "Company_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CompanyProductCategory" (
    "id" SERIAL NOT NULL,
    "companyId" INTEGER NOT NULL,
    "productId" INTEGER NOT NULL,
    "categoryId" INTEGER NOT NULL,
    "percentage" INTEGER NOT NULL,

    CONSTRAINT "CompanyProductCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Course" (
    "id" SERIAL NOT NULL,
    "profileId" INTEGER NOT NULL,
    "name" TEXT,
    "number" TEXT,

    CONSTRAINT "Course_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Education" (
    "id" SERIAL NOT NULL,
    "profileId" INTEGER NOT NULL,
    "school" TEXT NOT NULL,
    "degree_name" TEXT NOT NULL,
    "field_of_study" TEXT,
    "starts_at" TIMESTAMP(3),
    "ends_at" TIMESTAMP(3),
    "description" TEXT,
    "activities_and_societies" TEXT,
    "grade" TEXT,
    "logo_url" TEXT,
    "school_linkedin_profile_url" TEXT,

    CONSTRAINT "Education_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Experience" (
    "id" SERIAL NOT NULL,
    "profileId" INTEGER NOT NULL,
    "company" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "location" TEXT,
    "starts_at" TIMESTAMP(3),
    "ends_at" TIMESTAMP(3),
    "company_linkedin_profile_url" TEXT,
    "logo_url" TEXT,

    CONSTRAINT "Experience_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Group" (
    "id" SERIAL NOT NULL,
    "profileId" INTEGER NOT NULL,
    "profilePicUrl" TEXT,
    "name" TEXT,
    "url" TEXT,

    CONSTRAINT "Group_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HonourAward" (
    "id" SERIAL NOT NULL,
    "profileId" INTEGER NOT NULL,
    "title" TEXT,
    "issuer" TEXT,
    "issuedOn" TIMESTAMP(3),
    "description" TEXT,

    CONSTRAINT "HonourAward_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Job" (
    "id" SERIAL NOT NULL,
    "clientId" INTEGER,
    "department" TEXT,
    "businessUnit" TEXT,
    "hiringTeam" TEXT[],
    "title" TEXT,
    "salary" INTEGER,
    "currency" TEXT,
    "openSince" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "userId" TEXT,
    "description" TEXT,

    CONSTRAINT "Job_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Language" (
    "id" SERIAL NOT NULL,
    "profileId" INTEGER NOT NULL,
    "language" TEXT NOT NULL,

    CONSTRAINT "Language_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Patent" (
    "id" SERIAL NOT NULL,
    "profileId" INTEGER NOT NULL,
    "title" TEXT,
    "issuer" TEXT,
    "issuedOn" TIMESTAMP(3),
    "description" TEXT,
    "applicationNumber" TEXT,
    "patentNumber" TEXT,
    "url" TEXT,

    CONSTRAINT "Patent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PeopleAlsoViewed" (
    "id" SERIAL NOT NULL,
    "profileId" INTEGER NOT NULL,
    "link" TEXT,
    "name" TEXT,
    "summary" TEXT,
    "location" TEXT,

    CONSTRAINT "PeopleAlsoViewed_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "companyId" INTEGER NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Profile" (
    "id" SERIAL NOT NULL,
    "public_identifier" TEXT,
    "first_name" TEXT,
    "last_name" TEXT,
    "full_name" TEXT,
    "city" TEXT,
    "state" TEXT,
    "country" TEXT,
    "country_full_name" TEXT,
    "summary" TEXT,
    "profile_pic_url" TEXT,
    "background_cover_image_url" TEXT,
    "headline" TEXT,
    "occupation" TEXT,
    "connections" INTEGER,
    "follower_count" INTEGER,
    "recommendations" TEXT[],
    "skills" TEXT[],
    "last_updated" TIMESTAMP(3),
    "linkedin_profile_url" TEXT NOT NULL,
    "email" TEXT,
    "phone" TEXT,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Project" (
    "id" SERIAL NOT NULL,
    "profileId" INTEGER NOT NULL,
    "title" TEXT,
    "description" TEXT,
    "url" TEXT,
    "startsAt" TIMESTAMP(3),
    "endsAt" TIMESTAMP(3),

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Publication" (
    "id" SERIAL NOT NULL,
    "profileId" INTEGER NOT NULL,
    "name" TEXT,
    "publisher" TEXT,
    "publishedOn" TIMESTAMP(3),
    "description" TEXT,
    "url" TEXT,

    CONSTRAINT "Publication_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SimilarProfile" (
    "id" SERIAL NOT NULL,
    "profileId" INTEGER NOT NULL,
    "name" TEXT,
    "link" TEXT,
    "summary" TEXT,
    "location" TEXT,

    CONSTRAINT "SimilarProfile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TestScore" (
    "id" SERIAL NOT NULL,
    "profileId" INTEGER NOT NULL,
    "name" TEXT,
    "score" TEXT,
    "dateOn" TIMESTAMP(3),
    "description" TEXT,

    CONSTRAINT "TestScore_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VolunteerWork" (
    "id" SERIAL NOT NULL,
    "profileId" INTEGER NOT NULL,
    "cause" TEXT,
    "company" TEXT,
    "companyLinkedinProfileUrl" TEXT,
    "description" TEXT,
    "endsAt" TIMESTAMP(3),
    "logoUrl" TEXT,
    "startsAt" TIMESTAMP(3),
    "title" TEXT,

    CONSTRAINT "VolunteerWork_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_JobCandidates" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "CandidateStage_profileId_jobId_key" ON "CandidateStage"("profileId", "jobId");

-- CreateIndex
CREATE UNIQUE INDEX "Category_name_key" ON "Category"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Client_name_key" ON "Client"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Company_name_key" ON "Company"("name");

-- CreateIndex
CREATE UNIQUE INDEX "CompanyProductCategory_companyId_productId_categoryId_key" ON "CompanyProductCategory"("companyId", "productId", "categoryId");

-- CreateIndex
CREATE UNIQUE INDEX "Product_name_key" ON "Product"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Profile_public_identifier_key" ON "Profile"("public_identifier");

-- CreateIndex
CREATE UNIQUE INDEX "_JobCandidates_AB_unique" ON "_JobCandidates"("A", "B");

-- CreateIndex
CREATE INDEX "_JobCandidates_B_index" ON "_JobCandidates"("B");

-- AddForeignKey
ALTER TABLE "AccomplishmentOrg" ADD CONSTRAINT "AccomplishmentOrg_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Activity" ADD CONSTRAINT "Activity_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Article" ADD CONSTRAINT "Article_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CandidateStage" ADD CONSTRAINT "CandidateStage_jobId_fkey" FOREIGN KEY ("jobId") REFERENCES "Job"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CandidateStage" ADD CONSTRAINT "CandidateStage_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Certification" ADD CONSTRAINT "Certification_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompanyProductCategory" ADD CONSTRAINT "CompanyProductCategory_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompanyProductCategory" ADD CONSTRAINT "CompanyProductCategory_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompanyProductCategory" ADD CONSTRAINT "CompanyProductCategory_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Course" ADD CONSTRAINT "Course_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Education" ADD CONSTRAINT "Education_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Experience" ADD CONSTRAINT "Experience_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Group" ADD CONSTRAINT "Group_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HonourAward" ADD CONSTRAINT "HonourAward_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Job" ADD CONSTRAINT "Job_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Language" ADD CONSTRAINT "Language_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Patent" ADD CONSTRAINT "Patent_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PeopleAlsoViewed" ADD CONSTRAINT "PeopleAlsoViewed_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Publication" ADD CONSTRAINT "Publication_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SimilarProfile" ADD CONSTRAINT "SimilarProfile_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TestScore" ADD CONSTRAINT "TestScore_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VolunteerWork" ADD CONSTRAINT "VolunteerWork_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_JobCandidates" ADD CONSTRAINT "_JobCandidates_A_fkey" FOREIGN KEY ("A") REFERENCES "Job"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_JobCandidates" ADD CONSTRAINT "_JobCandidates_B_fkey" FOREIGN KEY ("B") REFERENCES "Profile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

