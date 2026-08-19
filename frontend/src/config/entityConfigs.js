export const navigationItems = [
  { key: "students", label: "Students", href: "/" },
  { key: "faculty", label: "Faculty", href: "/faculty" },
  { key: "courses", label: "Courses", href: "/course" },
  { key: "departments", label: "Departments", href: "/department" },
  { key: "library", label: "Library", href: "/library" }
];

export const entityConfigs = {
  students: {
    pageKey: "students",
    dataKey: "students",
    singular: "Student",
    icon: "bi-mortarboard-fill",
    heroEyebrow: "Student Console",
    heroTitle: "Student management with a cleaner React workspace.",
    heroCopy:
      "Track enrolments, keep contact details organized, and handle updates from one responsive dashboard.",
    listTitle: "Student",
    listSubtitle:
      "This separate frontend is componentized and ready to wire into backend APIs.",
    searchPlaceholder: "Search students by any visible field",
    addLabel: "Add student",
    columns: [
      { key: "id", label: "ID" },
      { key: "name", label: "Name" },
      { key: "course", label: "Course" },
      { key: "batch", label: "Batch" },
      { key: "phone", label: "Phone" },
      { key: "email", label: "Email" }
    ],
    formFields: [
      { name: "name", label: "Student name", placeholder: "Enter student name", required: true, col: "col-md-6" },
      { name: "course", label: "Course", placeholder: "Enter course", required: true, col: "col-md-6" },
      { name: "batch", label: "Batch", placeholder: "Enter batch", required: true, col: "col-md-6" },
      { name: "phone", label: "Phone", placeholder: "Enter phone number", required: true, col: "col-md-6", type: "tel" },
      { name: "email", label: "Email", placeholder: "Enter email address", required: true, col: "col-md-6", type: "email" },
      { name: "fatherName", label: "Father name", placeholder: "Enter father name", col: "col-md-6" },
      { name: "motherName", label: "Mother name", placeholder: "Enter mother name", col: "col-md-6" },
      { name: "state", label: "State", placeholder: "Enter state", col: "col-md-6" },
      { name: "country", label: "Country", placeholder: "Enter country", col: "col-md-6" }
    ]
  },
  faculty: {
    pageKey: "faculty",
    dataKey: "faculty",
    singular: "Faculty",
    icon: "bi-person-workspace",
    heroEyebrow: "Faculty Console",
    heroTitle: "Faculty records that feel less like paperwork.",
    heroCopy:
      "Keep academic staff, departments, and contact information aligned in a single modern interface.",
    listTitle: "Faculty",
    listSubtitle:
      "A reusable page shell now powers faculty management in the new frontend.",
    searchPlaceholder: "Search faculty by name, department, or designation",
    addLabel: "Add faculty",
    columns: [
      { key: "id", label: "ID" },
      { key: "name", label: "Name" },
      { key: "department", label: "Department" },
      { key: "designation", label: "Designation" },
      { key: "phone", label: "Phone" },
      { key: "email", label: "Email" },
      { key: "experience", label: "Experience" }
    ],
    formFields: [
      { name: "name", label: "Faculty name", placeholder: "Enter faculty name", required: true, col: "col-md-6" },
      { name: "department", label: "Department", placeholder: "Enter department", required: true, col: "col-md-6" },
      { name: "designation", label: "Designation", placeholder: "Enter designation", required: true, col: "col-md-6" },
      { name: "phone", label: "Phone", placeholder: "Enter phone number", required: true, col: "col-md-6", type: "tel" },
      { name: "email", label: "Email", placeholder: "Enter email address", required: true, col: "col-md-6", type: "email" },
      { name: "qualification", label: "Qualification", placeholder: "Enter qualification", col: "col-md-6" },
      { name: "experience", label: "Experience", placeholder: "Years of experience", col: "col-md-6", type: "number" },
      { name: "state", label: "State", placeholder: "Enter state", col: "col-md-6" },
      { name: "country", label: "Country", placeholder: "Enter country", col: "col-md-6" }
    ]
  },
  courses: {
    pageKey: "courses",
    dataKey: "courses",
    singular: "Course",
    icon: "bi-journal-richtext",
    heroEyebrow: "Course Console",
    heroTitle: "Course planning in a sharper React layout.",
    heroCopy:
      "Review curriculum details, delivery modes, and faculty assignments through a streamlined Bootstrap UI.",
    listTitle: "Course",
    listSubtitle:
      "The layout is now shared and ready for API wiring later.",
    searchPlaceholder: "Search courses by name, code, department, or faculty",
    addLabel: "Add course",
    columns: [
      { key: "id", label: "ID" },
      { key: "courseName", label: "Course name" },
      { key: "courseCode", label: "Course code" },
      { key: "department", label: "Department" },
      { key: "credits", label: "Credits" },
      { key: "facultyName", label: "Faculty" },
      { key: "courseLevel", label: "Level" },
      { key: "courseType", label: "Type" }
    ],
    formFields: [
      { name: "courseName", label: "Course name", placeholder: "Enter course name", required: true, col: "col-md-6" },
      { name: "courseCode", label: "Course code", placeholder: "Enter course code", required: true, col: "col-md-6" },
      { name: "department", label: "Department", placeholder: "Enter department", required: true, col: "col-md-6" },
      { name: "credits", label: "Credits", placeholder: "Enter credits", required: true, col: "col-md-6", type: "number" },
      { name: "facultyName", label: "Faculty name", placeholder: "Enter faculty name", required: true, col: "col-md-6" },
      { name: "courseLevel", label: "Course level", placeholder: "Enter course level", required: true, col: "col-md-6" },
      { name: "courseType", label: "Course type", placeholder: "Enter course type", required: true, col: "col-md-6" },
      { name: "language", label: "Language", placeholder: "Enter language", required: true, col: "col-md-6" },
      { name: "mode", label: "Mode", placeholder: "Online, offline, hybrid", required: true, col: "col-md-6" },
      { name: "examType", label: "Exam type", placeholder: "Enter exam type", required: true, col: "col-md-6" }
    ]
  },
  departments: {
    pageKey: "departments",
    dataKey: "departments",
    singular: "Department",
    icon: "bi-building",
    heroEyebrow: "Department Console",
    heroTitle: "Department oversight with room for the full picture.",
    heroCopy:
      "Track department heads, buildings, staffing, and contact details through a consistent React interface.",
    listTitle: "Department",
    listSubtitle:
      "All page-level styles and patterns now live outside the backend templates.",
    searchPlaceholder: "Search departments by name, code, or head",
    addLabel: "Add department",
    columns: [
      { key: "id", label: "ID" },
      { key: "departmentName", label: "Department name" },
      { key: "departmentCode", label: "Code" },
      { key: "headOfDepartment", label: "Head" },
      { key: "facultyCount", label: "Faculty" },
      { key: "studentCount", label: "Students" },
      { key: "buildingName", label: "Building" },
      { key: "departmentType", label: "Type" }
    ],
    formFields: [
      { name: "departmentName", label: "Department name", placeholder: "Enter department name", required: true, col: "col-md-6" },
      { name: "departmentCode", label: "Department code", placeholder: "Enter department code", required: true, col: "col-md-6" },
      { name: "headOfDepartment", label: "Head of department", placeholder: "Enter HOD name", required: true, col: "col-md-6" },
      { name: "facultyCount", label: "Faculty count", placeholder: "Enter faculty count", required: true, col: "col-md-6", type: "number" },
      { name: "studentCount", label: "Student count", placeholder: "Enter student count", required: true, col: "col-md-6", type: "number" },
      { name: "buildingName", label: "Building name", placeholder: "Enter building name", required: true, col: "col-md-6" },
      { name: "floorNumber", label: "Floor number", placeholder: "Enter floor number", required: true, col: "col-md-6", type: "number" },
      { name: "phone", label: "Phone", placeholder: "Enter phone number", required: true, col: "col-md-6", type: "tel" },
      { name: "email", label: "Email", placeholder: "Enter email address", required: true, col: "col-md-6", type: "email" },
      { name: "departmentType", label: "Department type", placeholder: "Enter department type", required: true, col: "col-md-6" }
    ]
  },
  library: {
    pageKey: "library",
    dataKey: "library",
    singular: "Book",
    icon: "bi-book-half",
    heroEyebrow: "Library Console",
    heroTitle: "Library records that are easier to scan and update.",
    heroCopy:
      "Organize books, availability, and shelf information in a modern catalog-style dashboard.",
    listTitle: "Library",
    listSubtitle:
      "The new frontend structure keeps inventory UI isolated from Spring templates.",
    searchPlaceholder: "Search books by title, author, code, or category",
    addLabel: "Add book",
    columns: [
      { key: "id", label: "ID" },
      { key: "bookName", label: "Book name" },
      { key: "bookCode", label: "Book code" },
      { key: "authorName", label: "Author" },
      { key: "publisher", label: "Publisher" },
      { key: "category", label: "Category" },
      { key: "quantity", label: "Quantity" },
      { key: "availabilityStatus", label: "Availability" }
    ],
    formFields: [
      { name: "bookName", label: "Book name", placeholder: "Enter book name", required: true, col: "col-md-6" },
      { name: "bookCode", label: "Book code", placeholder: "Enter book code", required: true, col: "col-md-6" },
      { name: "authorName", label: "Author name", placeholder: "Enter author name", required: true, col: "col-md-6" },
      { name: "publisher", label: "Publisher", placeholder: "Enter publisher", required: true, col: "col-md-6" },
      { name: "category", label: "Category", placeholder: "Enter category", required: true, col: "col-md-6" },
      { name: "language", label: "Language", placeholder: "Enter language", required: true, col: "col-md-6" },
      { name: "quantity", label: "Quantity", placeholder: "Enter quantity", required: true, col: "col-md-6", type: "number" },
      { name: "rackNumber", label: "Rack number", placeholder: "Enter rack number", required: true, col: "col-md-6" },
      { name: "floorNumber", label: "Floor number", placeholder: "Enter floor number", required: true, col: "col-md-6", type: "number" },
      { name: "availabilityStatus", label: "Availability status", placeholder: "Available, issued, reserved", required: true, col: "col-md-6" }
    ]
  }
};
