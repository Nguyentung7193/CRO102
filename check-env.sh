#!/bin/bash

# Màu sắc terminal
GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m' # No Color

function check_version {
  local label="$1"
  local command="$2"
  echo -e "${GREEN}🔍 $label:${NC}"
  eval $command || echo -e "${RED}❌ Không thể kiểm tra $label${NC}"
  echo
}

# Kiểm tra React Native
check_version "React Native version" "npx react-native --version"

# Kiểm tra Gradle wrapper version
check_version "Gradle wrapper version" "grep 'distributionUrl' android/gradle/wrapper/gradle-wrapper.properties | cut -d'-' -f2"

# Kiểm tra Android Gradle Plugin version
check_version "Android Gradle Plugin version" "grep 'com.android.tools.build:gradle' android/build.gradle"

# Kiểm tra Kotlin version
check_version "Kotlin version (trong build.gradle)" "grep 'kotlinVersion' android/build.gradle"

# Kiểm tra Java version
check_version "Java version" "java -version 2>&1 | head -n 1"
