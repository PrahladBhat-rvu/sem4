#Prahlad's code
class Course:
    def __init__(self, course_id, course_name, capacity):
        self.course_id = course_id
        self.course_name = course_name
        self.capacity = capacity
        self.enrolled_students = []

    def enroll_student(self, student):
        if len(self.enrolled_students) >= self.capacity:
            print("Course is full.")
            return
        if student in self.enrolled_students:
            print("Student already enrolled.")
            return
        self.enrolled_students.append(student)
        print("Student enrolled successfully.")

    def drop_student(self, student):
        if student in self.enrolled_students:
            self.enrolled_students.remove(student)
            print("Student dropped successfully.")
        else:
            print("Student not enrolled in this course.")

    def view_students(self):
        if not self.enrolled_students:
            print("No students enrolled.")
        else:
            print("Enrolled Students:")
            for student in self.enrolled_students:
                print("-", student)


class CourseManager:
    def __init__(self):
        self.courses = {}

    def add_course(self, course_id, course_name, capacity):
        if course_id in self.courses:
            print("Course already exists.")
            return
        self.courses[course_id] = Course(course_id, course_name, capacity)
        print("Course added successfully.")

    def enroll_student(self, course_id, student_name):
        if course_id not in self.courses:
            print("Course not found.")
            return
        self.courses[course_id].enroll_student(student_name)

    def drop_course(self, course_id, student_name):
        if course_id not in self.courses:
            print("Course not found.")
            return
        self.courses[course_id].drop_student(student_name)

    def view_courses(self):
        if not self.courses:
            print("No courses available.")
            return
        for course in self.courses.values():
            print(f"\nCourse ID: {course.course_id}")
            print(f"Course Name: {course.course_name}")
            print(f"Capacity: {course.capacity}")
            course.view_students()

#Abhay's code
def main():
    manager = CourseManager()

    while True:
        print("\n--- Course Enrollment System ---")
        print("1. Add Course")
        print("2. Enroll Student")
        print("3. Drop Student")
        print("4. View Courses")
        print("5. Exit")

        choice = input("Enter choice: ")

        if choice == "1":
            cid = input("Enter Course ID: ")
            cname = input("Enter Course Name: ")
            capacity = int(input("Enter Capacity: "))
            manager.add_course(cid, cname, capacity)

        elif choice == "2":
            cid = input("Enter Course ID: ")
            student = input("Enter Student Name: ")
            manager.enroll_student(cid, student)

        elif choice == "3":
            cid = input("Enter Course ID: ")
            student = input("Enter Student Name: ")
            manager.drop_course(cid, student)

        elif choice == "4":
            manager.view_courses()

        elif choice == "5":
            print("Exiting...")
            break

        else:
            print("Invalid choice.")


if __name__ == "__main__":
    main()
