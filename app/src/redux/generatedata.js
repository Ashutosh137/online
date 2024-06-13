import { faker } from "@faker-js/faker";
const GenerateData = () => {
  const data = [];
  for (let i = 1; i <= 200; i++) {
    const id = i;
    const name = faker.person.fullName();
    const email = faker.internet.email();
    const phone = faker.phone.number();
    const location = faker.location.city() + ", " + faker.address.country();
    const position = faker.person.jobTitle();
    const experience = faker.number.int({ min: 1, max: 20 }) + " years";
    const role = faker.person.jobType();

    data.push({
      id,
      name,
      email,
      phone,
      location,
      position,
      experience,
      role,
    });
  }
  return data;
};

export default GenerateData;
