package com.example.model;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum Government {
    ARISTOCRACY,
    MATRIARCHY,
    NOOCRACY,
    PATRIARCHY;


    @Override
    public String toString() {
        return name();
    }

    public static Government fromString(String value) {
        return valueOf(value);
    }

}
