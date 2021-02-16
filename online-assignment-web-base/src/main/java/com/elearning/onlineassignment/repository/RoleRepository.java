package com.elearning.onlineassignment.repository;

import java.util.Optional;

import com.elearning.onlineassignment.models.ERole;
import com.elearning.onlineassignment.models.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
    Optional<Role> findByName(ERole name);
}
