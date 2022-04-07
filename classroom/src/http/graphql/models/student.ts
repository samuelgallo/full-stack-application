import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Enrollment } from './enrollment';

@ObjectType()
export class Student {
  @Field(() => Student)
  id: string;

  @Field(() => [Enrollment])
  enrollment: Enrollment[];
}
