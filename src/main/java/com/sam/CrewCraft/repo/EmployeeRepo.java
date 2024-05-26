package com.sam.CrewCraft.repo;

import com.sam.CrewCraft.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepo extends JpaRepository<Employee,Long> {
}
