import { Teacher } from "./teacher";
//ou
import Teacher  from "./teacher";

import Teacher, { promote } from "./teacher";

const teacher = new Teacher("Lucas", "MSc");

teacher.teach();
