package com.clone.danngnback.service.impl;

import com.clone.danngnback.dto.Test;
import com.clone.danngnback.repository.TestRepository;
import com.clone.danngnback.service.TestService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TestServiceImpl implements TestService {
    private final TestRepository testRepository;

    public TestServiceImpl(TestRepository testRepository) {
        this.testRepository = testRepository;
    }

    @Override
    public List<Test> test() {
//        String message = "이것은 TestServiceImpl에서 보내는거야";
//        return message;
        return testRepository.findAll();
    }
}
