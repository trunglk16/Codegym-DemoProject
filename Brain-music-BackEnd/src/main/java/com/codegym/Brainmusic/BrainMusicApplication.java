package com.codegym.Brainmusic;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class BrainMusicApplication extends ServletInitializer {

    public static void main(String[] args) {
        SpringApplication.run(BrainMusicApplication.class, args);
    }

}
